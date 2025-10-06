"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./page.css";
import VarMisinYokMusun from "@/components/VarMisinYokMusun"; // 🎮 oyun bileşeni

const FILM_CATEGORIES = [
  {
    key: "dram",
    label: "Dram",
    icon: "🎭",
    films: [
      { id: "dp", title: "Dead Poets Society", note: "Carpe Diem ruhunu hissettirir.", quote: "Carpe Diem!" },
      { id: "tpoh", title: "The Pursuit of Happyness", note: "Azim ve mücadele öyküsü.", quote: "Never give up." },
      { id: "fg", title: "Forrest Gump", note: "Hayatın iniş çıkışlarını sade anlatır.", quote: "Run, Forrest, run!" },
      { id: "tte", title: "The Theory of Everything", note: "Hawking’in mücadele hikayesi.", quote: "However bad life may seem..." },
    ],
  },
  {
    key: "komedi",
    label: "Komedi",
    icon: "😂",
    films: [
      { id: "3i", title: "3 Idiots", note: "Eğlenceli ve düşündürücü.", quote: "All is well!" },
      { id: "pk", title: "PK", note: "Toplumsal eleştiri + mizah.", quote: "Confused... always confused." },
      { id: "sm", title: "Superbad", note: "Gençlik & dostluk.", quote: "I am McLovin!" },
      { id: "tt", title: "The Truman Show", note: "Gerçeklik/özgürlük.", quote: "Good morning..." },
    ],
  },
];

const CATEGORIES = [
  {
    key: "kisisel",
    label: "Kişisel Gelişim",
    icon: "🌱",
    books: [
      { id: "aa", title: "Atomik Alışkanlıklar", note: "Küçük alışkanlıklar → büyük sonuç", quote: "Sistemlerin kadar iyisin." },
      { id: "np", title: "Şimdinin Gücü", note: "Anda kalma", quote: "Anda kal!" },
      { id: "ag", title: "Alışkanlıkların Gücü", note: "Rutinlerin etkisi", quote: "Rutinler karakterini oluşturur." },
      { id: "4h", title: "4 Saatlik Hafta", note: "Verimlilik", quote: "Az çalış, akıllı yaşa." },
    ],
  },
  {
    key: "psikoloji",
    label: "Psikoloji",
    icon: "🧠",
    books: [
      { id: "md", title: "Mutluluk Bilimi", note: "Pozitif psikoloji", quote: "Mutluluk bir seçimdir." },
      { id: "sg", title: "Sosyal Hayvan", note: "İnsan davranışları", quote: "İnsan toplumsal bir varlıktır." },
      { id: "db", title: "Düşün ve Başar", note: "Zihinsel güç", quote: "İnan, başarabilirsin." },
      { id: "ie", title: "İkigai", note: "Yaşam amacı", quote: "Her sabah kalkmak için bir neden bul." },
    ],
  },
];

export default function MediaGallery() {
  const [activeType, setActiveType] = useState<"film" | "kitap" | "oyun">("film");
  const [activeCategoryKey, setActiveCategoryKey] = useState(CATEGORIES[0].key);
  const [activeFilmCategoryKey, setActiveFilmCategoryKey] = useState(FILM_CATEGORIES[0].key);
  const [readSet, setReadSet] = useState<Set<string>>(new Set());
  const [watchedSet, setWatchedSet] = useState<Set<string>>(new Set());

  // localStorage senkronizasyonu
  useEffect(() => {
    const storedRead = localStorage.getItem("READ_BOOKS");
    const storedWatched = localStorage.getItem("WATCHED_FILMS");
    if (storedRead) setReadSet(new Set(JSON.parse(storedRead)));
    if (storedWatched) setWatchedSet(new Set(JSON.parse(storedWatched)));
  }, []);
  useEffect(() => localStorage.setItem("READ_BOOKS", JSON.stringify([...readSet])), [readSet]);
  useEffect(() => localStorage.setItem("WATCHED_FILMS", JSON.stringify([...watchedSet])), [watchedSet]);

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.key === activeCategoryKey) || CATEGORIES[0],
    [activeCategoryKey]
  );
  const activeFilmCategory = useMemo(
    () => FILM_CATEGORIES.find((c) => c.key === activeFilmCategoryKey) || FILM_CATEGORIES[0],
    [activeFilmCategoryKey]
  );

  const totalBooks = useMemo(() => CATEGORIES.reduce((a, c) => a + c.books.length, 0), []);
  const totalFilms = useMemo(() => FILM_CATEGORIES.reduce((a, c) => a + c.films.length, 0), []);
  const progressBooks = totalBooks ? (readSet.size / totalBooks) * 100 : 0;
  const progressFilms = totalFilms ? (watchedSet.size / totalFilms) * 100 : 0;

  return (
    <div className="gallery-container">
      <h2 className="heading">✨ Bugünün Mood’u: Film mi Kitap mı Oyun mu?</h2>

      {/* 🔹 Sekmeler */}
      <div className="button-row">
        <button
          onClick={() => setActiveType("kitap")}
          className={`tab-btn ${activeType === "kitap" ? "active" : ""}`}
        >
          📚 Kitap
        </button>
        <button
          onClick={() => setActiveType("film")}
          className={`tab-btn ${activeType === "film" ? "active" : ""}`}
        >
          🎬 Film
        </button>
        <button
          onClick={() => setActiveType("oyun")}
          className={`tab-btn ${activeType === "oyun" ? "active" : ""}`}
        >
          🎮 Oyun
        </button>
      </div>

      {/* === 🎬 Film === */}
      {activeType === "film" && (
        <div>
          <div className="progress-card">
            <p className="progress-title">İzleme İlerlemesi</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressFilms}%` }} />
            </div>
            <p className="progress-text">
              {watchedSet.size}/{totalFilms} film izlendi 🎉
            </p>
          </div>

          <div className="chips-row">
            {FILM_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilmCategoryKey(cat.key)}
                className={`chip ${activeFilmCategoryKey === cat.key ? "active" : ""}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {activeFilmCategory.films.map((f) => {
            const done = watchedSet.has(f.id);
            return (
              <div key={f.id} className="card">
                <h3 className="card-title">{f.title}</h3>
                <p className="card-note">• {f.note}</p>
                <p className="card-quote">“{f.quote}”</p>
                <button
                  className={`toggle-btn ${done ? "active" : ""}`}
                  onClick={() => {
                    const next = new Set(watchedSet);
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    done ? next.delete(f.id) : next.add(f.id);
                    setWatchedSet(next);
                  }}
                >
                  {done ? "İzlendi ✓" : "İzlenecek +"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* === 📚 Kitap === */}
      {activeType === "kitap" && (
        <div>
          <div className="progress-card">
            <p className="progress-title">Okuma İlerlemesi</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressBooks}%` }} />
            </div>
            <p className="progress-text">
              {readSet.size}/{totalBooks} kitap okundu 🎉
            </p>
          </div>

          <div className="chips-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`chip ${activeCategoryKey === cat.key ? "active" : ""}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {activeCategory.books.map((b) => {
            const done = readSet.has(b.id);
            return (
              <div key={b.id} className="card">
                <h3 className="card-title">{b.title}</h3>
                <p className="card-note">• {b.note}</p>
                <p className="card-quote">“{b.quote}”</p>
                <button
                  className={`toggle-btn ${done ? "active" : ""}`}
                  onClick={() => {
                    const next = new Set(readSet);
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    done ? next.delete(b.id) : next.add(b.id);
                    setReadSet(next);
                  }}
                >
                  {done ? "Okundu ✓" : "Okunacak +"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* === 🎮 Oyun === */}
      {activeType === "oyun" && (
        <div className="game-section">
          <VarMisinYokMusun />
        </div>
      )}
    </div>
  );
}