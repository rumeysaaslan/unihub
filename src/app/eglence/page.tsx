"use client"
import React, { useEffect, useMemo, useState } from "react";
import "./page.css";
type Film = { id: string; title: string; year?: string; note: string; quote?: string };
const FILM_CATEGORIES = [
  { 
    key: "dram", 
    label: "Dram", 
    icon: "🎭", 
    films: [
      { id: "dp", title: "Dead Poets Society", note: "Carpe Diem ruhunu hissettirir, öğrencilerin hayata bakışını değiştirir.", quote: "Carpe Diem!" },
      { id: "tpoh", title: "The Pursuit of Happyness", note: "Azim ve mücadele öyküsü, asla pes etmemeyi öğretir.", quote: "Never give up." },
      { id: "fg", title: "Forrest Gump", note: "Hayatın iniş çıkışlarını sade ve ilham verici şekilde anlatır.", quote: "Run, Forrest, run!" },
      { id: "tte", title: "The Theory of Everything", note: "Stephen Hawking’in mücadele ve bilimle dolu yaşamı.", quote: "However bad life may seem, there is always something you can do." },
    ],
  },
  { 
    key: "komedi", 
    label: "Komedi", 
    icon: "😂", 
    films: [
      { id: "3i", title: "3 Idiots", note: "Eğlenceli ve düşündürücü üniversite hikayesi.", quote: "All is well!" },
      { id: "pk", title: "PK", note: "Toplumsal eleştiriyi mizahla harmanlayan bir film.", quote: "Confused... always confused." },
      { id: "sm", title: "Superbad", note: "Gençlik ve dostluğun eğlenceli bir anlatısı.", quote: "I am McLovin!" },
      { id: "tt", title: "The Truman Show", note: "Gerçeklik ve özgürlüğü sorgulatan, gülümseten bir hikaye.", quote: "Good morning, and in case I don't see ya..." },
    ],
  },
  {
    key: "kdrama",
    label: "K-Drama",
    icon: "🇰🇷",
    films: [
      { id: "cloy", title: "Crash Landing on You", note: "İki farklı dünyanın insanlarının yollarının kesiştiği aşk hikayesi.", quote: "You’re my destiny." },
      { id: "ic", title: "Itaewon Class", note: "Gençlerin adalet arayışı ve girişimcilik hikayesi.", quote: "My dream is bigger than your prejudice." },
      { id: "su", title: "Start-Up", note: "Genç girişimcilerin teknolojiyle dolu umut hikayesi.", quote: "Follow your dreams, not people." },
      { id: "tb", title: "True Beauty", note: "Özgüven ve kendini kabul üzerine eğlenceli bir gençlik dizisi.", quote: "Beauty begins the moment you decide to be yourself." },
    ],
  },
];

type Book = { id: string; title: string; author?: string; note: string; quote?: string };
const CATEGORIES = [
  { 
    key: "kisisel", 
    label: "Kişisel Gelişim", 
    icon: "🌱", 
    books: [
      { id: "aa", title: "Atomik Alışkanlıklar", note: "Küçük alışkanlıklarla büyük değişim sağlar.", quote: "Sistemlerin kadar iyisin." },
      { id: "np", title: "Şimdinin Gücü", note: "Anda kalmayı öğreten, zihinsel huzur sağlayan eser.", quote: "Anda kal!" },
      { id: "ag", title: "Alışkanlıkların Gücü", note: "Günlük rutinlerin hayatımızı nasıl şekillendirdiğini açıklar.", quote: "Rutinler karakterini oluşturur." },
      { id: "4h", title: "4 Saatlik Hafta", note: "Daha verimli çalışmayı ve zamanı yönetmeyi öğreten kitap.", quote: "Az çalış, akıllı yaşa." },
    ],
  },
  { 
    key: "psikoloji", 
    label: "Psikoloji", 
    icon: "🧠", 
    books: [
      { id: "md", title: "Mutluluk Bilimi", note: "Pozitif psikolojiyle mutluluğa bakış açısı kazandırır.", quote: "Mutluluk bir seçimdir." },
      { id: "sg", title: "Sosyal Hayvan", note: "İnsan davranışlarını anlamaya yönelik derin bir yolculuk.", quote: "İnsan toplumsal bir varlıktır." },
      { id: "db", title: "Düşün ve Başar", note: "Zihinsel gücü ve inancı vurgular.", quote: "İnan, başarabilirsin." },
      { id: "ie", title: "İkigai", note: "Japonların uzun yaşam sırrı: yaşam amacı.", quote: "Her sabah kalkmak için bir neden bul." },
    ],
  },
];

export default function MediaGallery() {
  const [activeType, setActiveType] = useState<"film" | "kitap">("film");
  const [activeCategoryKey, setActiveCategoryKey] = useState(CATEGORIES[0].key);
  const [readSet, setReadSet] = useState<Set<string>>(new Set());
  const [activeFilmCategoryKey, setActiveFilmCategoryKey] = useState(FILM_CATEGORIES[0].key);
  const [watchedSet, setWatchedSet] = useState<Set<string>>(new Set());

  // 🔹 Mount olduğunda localStorage'dan oku
  useEffect(() => {
    const storedRead = localStorage.getItem("READ_BOOKS");
    const storedWatched = localStorage.getItem("WATCHED_FILMS");
    if (storedRead) setReadSet(new Set(JSON.parse(storedRead)));
    if (storedWatched) setWatchedSet(new Set(JSON.parse(storedWatched)));
  }, []);

  // 🔹 Değiştikçe localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("READ_BOOKS", JSON.stringify([...readSet]));
  }, [readSet]);

  useEffect(() => {
    localStorage.setItem("WATCHED_FILMS", JSON.stringify([...watchedSet]));
  }, [watchedSet]);

  // aktif kategori bulma
  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.key === activeCategoryKey) || CATEGORIES[0],
    [activeCategoryKey]
  );
  const activeFilmCategory = useMemo(
    () => FILM_CATEGORIES.find((c) => c.key === activeFilmCategoryKey) || FILM_CATEGORIES[0],
    [activeFilmCategoryKey]
  );

  // ilerleme hesaplama
  const totalBooks = useMemo(() => CATEGORIES.reduce((acc, c) => acc + c.books.length, 0), []);
  const totalFilms = useMemo(() => FILM_CATEGORIES.reduce((acc, c) => acc + c.films.length, 0), []);

  const readCount = readSet.size;
  const watchedCount = watchedSet.size;

  const progressBooks = totalBooks ? (readCount / totalBooks) * 100 : 0;
  const progressFilms = totalFilms ? (watchedCount / totalFilms) * 100 : 0;

  return (
    <div className="gallery-container">
      <h2 className="heading">✨ Bugünün Mood’u: Film mi Kitap mı?</h2>

      {/* Toggle */}
      <div className="button-row">
        <button onClick={() => setActiveType("kitap")} className={`tab-btn ${activeType==="kitap" ? "active" : ""}`}>📚 Kitap Modu</button>
        <button onClick={() => setActiveType("film")} className={`tab-btn ${activeType==="film" ? "active" : ""}`}>🎬 Film Modu</button>
      </div>

      {/* Film */}
      {activeType === "film" && (
        <div>
          <div className="progress-card">
            <p className="progress-title">İzleme İlerlemesi</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progressFilms}%`}} />
            </div>
            <p className="progress-text">{watchedCount}/{totalFilms} film izlendi 🎉</p>
          </div>

          <div className="chips-row">
            {FILM_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilmCategoryKey(cat.key)}
                className={`chip ${activeFilmCategoryKey===cat.key ? "active" : ""}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {activeFilmCategory.films.map((f) => {
            const isWatched = watchedSet.has(f.id);
            return (
              <div key={f.id} className="card">
                <h3 className="card-title">{f.title}</h3>
                <p className="card-note">• {f.note}</p>
                {f.quote && <p className="card-quote">“{f.quote}”</p>}
                <button
                  onClick={() => {
                    const next = new Set(watchedSet);
                    if (isWatched) next.delete(f.id); else next.add(f.id);
                    setWatchedSet(next);
                  }}
                  className={`toggle-btn ${isWatched ? "active" : ""}`}
                >
                  {isWatched ? "İzlendi ✓" : "İzlenecek +"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Kitap */}
      {activeType === "kitap" && (
        <div>
          <div className="progress-card">
            <p className="progress-title">Okuma İlerlemesi</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progressBooks}%`}} />
            </div>
            <p className="progress-text">{readCount}/{totalBooks} kitap okundu 🎉</p>
          </div>

          <div className="chips-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`chip ${activeCategoryKey===cat.key ? "active" : ""}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {activeCategory.books.map((b) => {
            const isRead = readSet.has(b.id);
            return (
              <div key={b.id} className="card">
                <h3 className="card-title">{b.title}</h3>
                <p className="card-note">• {b.note}</p>
                {b.quote && <p className="card-quote">“{b.quote}”</p>}
                <button
                  onClick={() => {
                    const next = new Set(readSet);
                    if (isRead) next.delete(b.id); else next.add(b.id);
                    setReadSet(next);
                  }}
                  className={`toggle-btn ${isRead ? "active" : ""}`}
                >
                  {isRead ? "Okundu ✓" : "Okunacak +"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}