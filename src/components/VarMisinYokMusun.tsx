import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Var Mısın Yok Musun – TV Stüdyosu (24 Kutu)
 * Ultra sürüm (isteklerin hepsi eklendi)
 * -------------------------------------------------
 * • 24 kutu, TV stüdyosu görünümü
 * • Mavi = + para (konfeti + ses + haptik), Kırmızı = − para (kırmızı ışık + ses + haptik)
 * • Kutu açmadan önce 3→2→1 geri sayım, büyüyerek açılma
 * • Oyuncu önce kendi kutusunu seçer ("Benim Kutum")
 * • Her 4 açılıştan sonra BANKA teklifi (☎️ telefon çalar). Oyuncu telefonu açar → teklif görür; isterse reddeder
 * • Solda mavi kalanlar, sağda kırmızı kalanlar listesi
 * • Son kutu kalınca "Benim Kutumu Aç" ile final
 * • Ses Aç/Kapat anahtarı
 */

export default function VarMisinYokMusun() {
  type Box = { id: number; amount: number; color: "blue" | "red"; opened: boolean };

  /* -------------------- Ses & Haptik -------------------- */
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundOn = useRef(true);
  const ensureAudio = (): AudioContext => {
    // Web Audio API türünü güvenli şekilde al
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioCtx) {
      throw new Error("Web Audio API desteklenmiyor.");
    }

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }

    return audioCtxRef.current;
  };
  const beep = (freq = 440, dur = 0.12, type: OscillatorType = "sine", gain = 0.06) => {
    if (!soundOn.current) return;
    const ctx = ensureAudio();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type; o.frequency.value = freq; g.gain.value = gain;
    o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
  };
  const chord = (base = 440) => { [base, base * 1.25, base * 1.5].forEach((f, i) => setTimeout(() => beep(f, 0.14, "triangle", 0.05), i * 40)); };
  const sad = () => { [440, 330, 220].forEach((f, i) => setTimeout(() => beep(f, 0.16, "sawtooth", 0.06), i * 120)); };
  const ringOnce = () => { beep(880, 0.15, "square", 0.04); setTimeout(() => beep(880, 0.15, "square", 0.04), 180); };
  const haptic = (ms = 40) => {
    try {
      // navigator.vibrate bazı tarayıcılarda tanımlı değil, bu yüzden opsiyonel zincirleme
      (navigator as Navigator & { vibrate?: (pattern: number | number[]) => boolean }).vibrate?.(ms);
    } catch {
      // hata olursa sessiz geç
    }
  };

  /* -------------------- Oyun Havuzu -------------------- */
  const bluePool = useMemo(() => [1000, 2000, 5000, 7500, 10000, 20000, 30000, 40000, 50000, 75000, 100000, 250000], []);
  const redPool = useMemo(() => [1000, 2000, 5000, 7500, 10000, 20000, 30000, 40000, 50000, 75000, 100000, 250000].map(n => -n), []);

  const [boxes, setBoxes] = useState<Box[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [openedCount, setOpenedCount] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [pendingOpenId, setPendingOpenId] = useState<number | null>(null);
  const [flashRed, setFlashRed] = useState(false);
  const [confettis, setConfettis] = useState<number[]>([]);

  const [isRinging, setIsRinging] = useState(false);
  const [showOfferSheet, setShowOfferSheet] = useState(false);
  const [offerValue, setOfferValue] = useState<number | null>(null);
  const [finalWin, setFinalWin] = useState<number | null>(null);

  const [myBoxId, setMyBoxId] = useState<number | null>(null);
  const [stage, setStage] = useState<"pick" | "play">("pick");
  const [soundsEnabled, setSoundsEnabled] = useState(true);

  useEffect(() => { soundOn.current = soundsEnabled; }, [soundsEnabled]);

  // Kurulum
  useEffect(() => { restart(); }, []);

  function restart() {
    // 🎲 Kutuları karıştır
    const shuffledBlue = [...bluePool].sort(() => Math.random() - 0.5);
    const shuffledRed = [...redPool].sort(() => Math.random() - 0.5);

    const mixed = [
      ...shuffledBlue.map((a) => ({ amount: a, color: "blue" as const })),
      ...shuffledRed.map((a) => ({ amount: a, color: "red" as const })),
    ]
      .sort(() => Math.random() - 0.5)
      .slice(0, 24);

    // 📦 Tüm kutular sıfırdan kapalı olsun
    const init: Box[] = mixed.map((m, i) => ({
      id: i + 1,
      amount: m.amount,
      color: m.color,
      opened: false,
    }));

    // ♻️ Tüm state’leri sıfırla
    setBoxes(init);
    setBalance(0);
    setOpenedCount(0);
    setOfferValue(null);
    setFinalWin(null);
    setIsRinging(false);
    setShowOfferSheet(false);
    setFlashRed(false);
    setCountdown(null);
    setPendingOpenId(null);
    setMyBoxId(null);
    setStage("pick");
    setConfettis([]); // 🎉 Konfetileri de sıfırla
  }

  // Listeler

  const remainingBlue = boxes.filter(b => b.color === "blue" && !b.opened && b.id !== myBoxId).map(b => b.amount).sort((a, b) => a - b);
  const remainingRed = boxes.filter(b => b.color === "red" && !b.opened && b.id !== myBoxId).map(b => b.amount).sort((a, b) => a - b);

  // Banka teklifi tetikleme
  useEffect(() => {
    if (finalWin !== null || stage !== "play") return;
    if (openedCount > 0 && openedCount % 4 === 0) {
      setIsRinging(true);
    }
  }, [openedCount, finalWin, stage]);

  // Teklif (EV temelli risk ayarlı)
  const computeOffer = () => {
    // Hamdi Bey teklifi = bakiye × 1.5 × (rastgele %10 sapma)
    const randomFactor = 0.9 + Math.random() * 0.2; // %±10 varyasyon
    let offer = balance * 1.5 * randomFactor;

    // Teklif her zaman pozitif olsun (en az 1000 TL)
    if (offer < 1000) offer = 1000;

    // 2 ondalık basamaklı
    const formatted = parseFloat(offer.toFixed(2));

    setOfferValue(formatted);
    setShowOfferSheet(true);
  };

  const handleAnswerPhone = () => { setIsRinging(false); setTimeout(() => { ringOnce(); computeOffer(); }, 300); };
  const handleIgnorePhone = () => { setIsRinging(false); };
  const acceptOffer = () => { if (offerValue != null) { setFinalWin(offerValue); chord(520); haptic(60); } setOfferValue(null); setShowOfferSheet(false); };
  const rejectOffer = () => { setOfferValue(null); setShowOfferSheet(false); beep(300, 0.1); };

  // Kutu seçimi
  const selectMyBox = (id: number) => { if (stage !== "pick") return; setMyBoxId(id); setStage("play"); chord(660); haptic(40); };

  // Kutu açma akışı
  const tryOpen = (id: number) => {
    if (stage !== "play" || finalWin !== null) return;
    if (id === myBoxId) return; // kendi kutunu oyun sonuna sakla
    const box = boxes.find(b => b.id === id); if (!box || box.opened) return;
    if (countdown !== null || pendingOpenId !== null) return;

    setPendingOpenId(id);
    setCountdown(3); beep(500, 0.09); haptic(20);
    const t1 = setInterval(() => {
      setCountdown((c) => {
        if (c === null) return c;
        if (c > 1) { beep(500 + (3 - c) * 80, 0.09); haptic(10); return c - 1; }
        clearInterval(t1);
        reveal(id);
        return null;
      });
    }, 600);
  };

  const reveal = (id: number) => {
    setBoxes(prev => prev.map(b => (b.id === id ? { ...b, opened: true } : b)));
    const opened = boxes.find(b => b.id === id)!;
    const delta = opened.amount; // mavi + / kırmızı −
    const newBal = balance + delta;
    setBalance(newBal);
    setOpenedCount(c => c + 1);
    setPendingOpenId(null);
    const playApplause = () => {
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_94f0a5d2b4.mp3?filename=small-crowd-applause-6693.mp3");
      audio.volume = 0.6;
      audio.play().catch(() => { });
    };



    if (opened.color === "blue") {
      const batchId = Date.now();
      setConfettis(arr => [...arr, batchId]);
      setTimeout(() => setConfettis(arr => arr.filter(i => i !== batchId)), 1800);
      chord(700);
      haptic(60);
      playApplause(); // 👏 alkış sesi
    } else {
      // 🔴 Kırmızı kutu → kayıp
      setFlashRed(true);
      setTimeout(() => setFlashRed(false), 800);
      sad();
      haptic(90);

      // 😮 “Aaa!” efekti
      const audio = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_8b5ebd60ff.mp3?filename=crowd-aww-1-24104.mp3"
      );
      audio.volume = 0.6;
      audio.play().catch(() => { });

      // ❌ Eğer bu ilk açılışsa ve bakiye negatife düştüyse → hemen yeniden başlat
      if (openedCount === 0 && newBal < 0) {
        setTimeout(() => restart(), 1000);
        return;
      }

      // ❌ Diğer durumlarda normal kayıp akışı
      if (newBal < 0) {
        setTimeout(() => setFinalWin(newBal), 800);
        return;
      }
    }
  };

  // Final: Benim kutum
  const canOpenMyBox = stage === "play" && finalWin === null && boxes.filter(b => !b.opened && b.id !== myBoxId).length === 0;
  const openMyBox = () => {
    if (!myBoxId) return;
    const myBox = boxes.find(b => b.id === myBoxId)!;
    setBoxes(prev => prev.map(b => (b.id === myBoxId ? { ...b, opened: true } : b)));
    const result = balance + myBox.amount; // son değer
    setFinalWin(result);
    if (result >= 0) { chord(720); } else { sad(); }
    haptic(120);
  };

  const formatMoney = (n: number) => (n >= 0 ? "+" : "") + n.toLocaleString("tr-TR") + " TL";

  /* -------------------- UI -------------------- */
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Sahne ışıkları */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60rem_20rem_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(50rem_20rem_at_20%_-10%,rgba(239,68,68,0.15),transparent_60%),radial-gradient(50rem_20rem_at_80%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Üst bar */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-3 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">VAR MISIN <span className="text-sky-400">YOK MUSUN</span></h1> <span style={{color:'red'}}>!! Telefonu yan tutunca daha keyifli</span>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-800/70 px-4 py-2 shadow-inner border border-slate-700 text-sm">
            Bakiye: <span className={`font-semibold ${balance >= 0 ? "text-emerald-400" : "text-rose-400"}`}>{formatMoney(balance)}</span>
          </div>
          <label className="flex items-center gap-2 text-xs border border-slate-600 rounded-xl px-3 py-2 bg-slate-800/60">
            <input type="checkbox" checked={soundsEnabled} onChange={(e) => setSoundsEnabled(e.target.checked)} /> Ses
          </label>
          <button onClick={restart} className="rounded-2xl bg-slate-800/70 hover:bg-slate-700 px-4 py-2 text-sm border border-slate-600 transition">Yeniden Başla</button>
        </div>
      </header>

      {/* İçerik */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-16 grid grid-cols-12 gap-4 md:gap-6">
        {/* Sol Panel */}
        <aside className="hidden md:block col-span-2">
          <Panel title="MAVİ (+)">
            <div className="space-y-2">
              {remainingBlue.map(v => (<AmountPill key={"b" + v} value={v} color="blue" />))}
            </div>
          </Panel>
        </aside>

        {/* Orta Alan */}
        <section className="col-span-12 md:col-span-8">
          {stage === "pick" && (
            <div className="mb-4 text-center text-sm text-slate-300">Kendi kutunu seç: <span className="text-sky-300">24 kutudan birini tıkla</span></div>
          )}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
            {boxes.map((b) => (
              <GameBox
                key={b.id}
                b={b}
                onClick={() => (stage === "pick" ? selectMyBox(b.id) : tryOpen(b.id))}
                pending={pendingOpenId === b.id}
                selected={myBoxId === b.id}
                pickMode={stage === "pick"}
              />
            ))}
          </div>

          {/* Konfeti */}
          <AnimatePresence>
            {confettis.map((id) => (<Confetti key={id} />))}
          </AnimatePresence>
          {/* Kırmızı flaş */}
          <AnimatePresence>{flashRed && <RedFlash />}</AnimatePresence>

          {/* Final butonu */}
          {canOpenMyBox && (
            <div className="mt-6 flex justify-center">
              <button onClick={openMyBox} className="px-6 py-3 rounded-2xl bg-sky-700 hover:bg-sky-600 border border-sky-400/40 shadow">Benim Kutumu Aç</button>
            </div>
          )}
        </section>

        {/* Sağ Panel */}
        <aside className="hidden md:block col-span-2">
          <Panel title="KIRMIZI (−)">
            <div className="space-y-2">
              {remainingRed.map(v => (<AmountPill key={"r" + v} value={v} color="red" />))}
            </div>
          </Panel>
        </aside>
      </main>

      {/* Telefon çalıyor */}
      <AnimatePresence>
        {isRinging && (
          <PhoneRinging onAnswer={handleAnswerPhone} onIgnore={handleIgnorePhone} />
        )}
      </AnimatePresence>

      {/* Teklif */}
      <AnimatePresence>
        {showOfferSheet && offerValue !== null && (
          <OfferSheet amount={offerValue} onAccept={acceptOffer} onReject={rejectOffer} />
        )}
      </AnimatePresence>

      {/* Final sonuç */}
      <AnimatePresence>
        {finalWin !== null && (<FinalModal amount={finalWin} onRestart={restart} />)}
      </AnimatePresence>

      {/* Geri sayım */}
      <AnimatePresence>
        {countdown !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/75 cursor-pointer"
          >
            <motion.div key={countdown} initial={{ scale: 0.6 }} animate={{ scale: 1 }} exit={{ scale: 0.6 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="text-[7rem] md:text-[9rem] font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
              {countdown}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------ Yardımcı Bileşenler ------------------ */
function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-800/70 to-slate-900/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.35)] p-4">
      <div className="text-xs uppercase tracking-widest text-slate-300/80 mb-3">{title}</div>
      {children}
    </div>
  );
}

function AmountPill({ value, color }: { value: number; color: "blue" | "red" }) {
  const positive = value >= 0;
  const txt = (positive ? "+" : "-") + Math.abs(value).toLocaleString("tr-TR") + " TL";
  return (
    <div className={`text-center text-[13px] font-semibold rounded-xl px-3 py-2 select-none shadow-sm border ${color === "blue" ? "bg-gradient-to-r from-sky-600/40 to-sky-500/30 border-sky-400/30 text-sky-100" : "bg-gradient-to-r from-rose-600/40 to-rose-500/30 border-rose-400/30 text-rose-100"}`}>{txt}</div>
  );
}

function GameBox({
  b,
  onClick,
  pending,
  selected,
  pickMode,
}: {
  b: { id: number; amount: number; color: "blue" | "red"; opened: boolean };
  onClick: () => void;
  pending: boolean;
  selected: boolean;
  pickMode: boolean;
}) {
  const intensity = Math.min(Math.abs(b.amount) / 250000, 1); // 0-1 arası

  const opened = b.opened;
  const isBlue = b.color === "blue";

  return (
    <motion.button
      layout
      onClick={!opened ? onClick : undefined}
      disabled={opened}
      className={`relative aspect-[5/4] w-full rounded-2xl border overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.35)]
        ${selected ? "ring-2 ring-sky-400" : ""}
        ${pending ? "animate-pulse ring-2 ring-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]" : ""}
      `}
      style={{
        borderColor: "rgba(100,116,139,0.6)",
        background: opened
          ? isBlue
            ? `linear-gradient(145deg, rgba(59,130,246,${0.3 + intensity * 0.4}), rgba(14,165,233,${0.3 + intensity * 0.4}))`
            : `linear-gradient(145deg, rgba(239,68,68,${0.3 + intensity * 0.4}), rgba(220,38,38,${0.3 + intensity * 0.4}))`
          : "radial-gradient(80%_120% at 50% -20%, rgba(255,255,255,0.12), transparent 60%), linear-gradient(180deg, rgba(2,6,23,0.8), rgba(15,23,42,0.9))",
      }}
      whileTap={{ scale: opened ? 1 : 0.98 }}
    >
      {/* parıltı */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_100%_at_50%_-20%,rgba(255,255,255,0.35),transparent)]" />

      {/* içerik */}
      <div className="relative z-10 h-full w-full grid place-items-center">
        {!opened ? (
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight select-none">
            {pickMode ? b.id : selected ? `Kutun: ${b.id}` : b.id}
          </div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0.5, rotate: -7, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="text-center"
            >
              <div className={`text-lg sm:text-xl font-semibold ${isBlue ? "text-sky-100" : "text-rose-100"}`}>
                {isBlue ? "+" : "-"}
                {Math.abs(b.amount).toLocaleString("tr-TR")} TL
              </div>
            </motion.div>

            {/* 🩶 Gri overlay (kutunun açıldığını belli eder) */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
          </>
        )}
      </div>

      {/* dış hat */}
      <div
        className={`absolute inset-0 rounded-2xl ring-1 ${opened ? (isBlue ? "ring-sky-300/60" : "ring-rose-300/60") : "ring-white/10"
          }`}
      />
    </motion.button>
  );
}

/* --------- Efektler --------- */
function Confetti() {
  const pieces = Array.from({ length: 36 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {pieces.map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = "-5%";
        const background = ["#60a5fa", "#34d399", "#f472b6", "#fbbf24", "#38bdf8"][i % 5];
        const rotate = Math.random() * 360;
        const duration = 1 + Math.random() * 1.2;

        return (
          <span
            key={i}
            className="absolute w-1.5 h-3 rounded-sm"
            style={{
              left,
              top,
              background,
              transform: `rotate(${rotate}deg)`,
              animation: `fall ${duration}s linear forwards`,
            } as React.CSSProperties}
          />
        );
      })}
      <style>
        {`@keyframes fall {
        to {
          transform: translateY(110vh) rotate(720deg);
          opacity: 0.9;
        }
      }`}
      </style>
    </motion.div>
  );
}
function RedFlash() { return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 z-30 bg-red-600 mix-blend-screen" />); }

/* --------- Telefon & Teklif --------- */
function PhoneRinging({ onAnswer, onIgnore }: { onAnswer: () => void; onIgnore: () => void }) {
  useEffect(() => {
    // Browser'ın AudioContext türünü güvenli biçimde alıyoruz
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const ring = () => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.value = 880;
      g.gain.value = 0.05;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.15);
    };

    const t = setInterval(ring, 800);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/70">
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-[92%] max-w-md rounded-3xl border border-slate-600 bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl text-center">
        <div className="mx-auto mb-4 size-16 rounded-2xl grid place-items-center bg-slate-700/60">
          <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="text-3xl">📞</motion.div>
        </div>
        <div className="text-lg font-semibold mb-1 text-yellow-300">
          Hamdi Bey Arıyor 📞
        </div>
        <p className="text-slate-300 text-sm mb-6">İstersen telefonu açıp teklifi dinleyebilirsin. İstersen görmezden gelip oyuna devam.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={onAnswer} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition shadow">Aç (Cevapla)</button>
          <button onClick={onIgnore} className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition">Görmezden Gel</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function OfferSheet({ amount, onAccept, onReject }: { amount: number; onAccept: () => void; onReject: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/70">
      <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-[92%] max-w-md rounded-3xl border border-sky-500/40 bg-gradient-to-b from-sky-900/40 to-slate-900 p-6 shadow-2xl text-center">
        <div className="text-yellow-300 text-sm uppercase tracking-widest">
          HAMDİ BEY’İN TEKLİFİ 💰
        </div>
        <div className="text-4xl font-extrabold my-3 text-white drop-shadow">{amount.toLocaleString("tr-TR")} TL</div>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={onAccept} className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition shadow">Kabul Et</button>
          <button onClick={onReject} className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 transition">Devam Et</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
function FinalModal({ amount, onRestart }: { amount: number; onRestart: () => void }) {
  const positive = amount >= 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onRestart} // 🔁 Her yere tıklanınca yeniden başlat
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-[92%] max-w-md rounded-3xl border border-slate-600 bg-gradient-to-b from-slate-900 to-slate-800 p-6 shadow-2xl text-center"
      >
        <div className="text-2xl font-bold mb-1">
          {positive ? "🎉 Tebrikler!" : "💀 Oyun Bitti"}
        </div>
        <div
          className={`text-3xl font-extrabold ${positive ? "text-emerald-400" : "text-rose-400"
            }`}
        >
          {positive ? "+" : "-"}
          {Math.abs(amount).toLocaleString("tr-TR")} TL
        </div>
        <button
          onClick={onRestart}
          className="mt-5 px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition"
        >
          Tekrar Oyna 🔁
        </button>
      </motion.div>
    </motion.div>
  );
}