"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

function KykBoard() {
  const panVideos = [
    { src: "/video-1759739346-1.MP4" },
    { src: "/video-1759762238-1.MP4" },
    { src: "/video-1759762440-1.MP4" },
    { src: "/video-1759762641-1.MP4" },
  ];

  const blenderImages = ["/blender1.jpeg", "/blender2.jpeg", "/blender3.jpeg", "/blender4.jpeg"];
  const trendyolLink = "https://ty.gl/5wpwefo2hwe3i";
  const instagramUsername = "rumeyscode";

  const [showNote, setShowNote] = React.useState(false);

  // 💖 Instagram yönlendirme
  const openInstagram = () => {
    const appLink = `instagram://user?username=${instagramUsername}`;
    const webLink = `https://www.instagram.com/${instagramUsername}/`;

    const start = Date.now();
    const timeout = setTimeout(() => {
      if (Date.now() - start < 1600) window.location.href = webLink;
    }, 1000);

    window.location.href = appLink;
    window.addEventListener("blur", () => clearTimeout(timeout));
  };

  // 📹 Çift tıklamada mesaj + yönlendirme
  const handleDoubleClick = () => {
    setShowNote(true);
    setTimeout(() => setShowNote(false), 1600);
    setTimeout(() => openInstagram(), 1200);
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-6 bg-gradient-to-b from-white to-green-50 min-h-screen">

      {/* 🍳 Tencere Bölümü */}
      <section className="w-full max-w-4xl space-y-5">
        <div className="text-center mt-2">
          <h2 className="text-2xl font-bold text-green-700 mb-1">🍳 Çok Amaçlı Tencere</h2>
          <p className="text-gray-600 text-sm italic">
            Yurt mutfağında yemek, makarna, hatta kek bile yapabilirsin!  
            Az yer kaplar, çok iş yapar 💚
          </p>
        </div>

        {/* Üst Fotoğraf */}
        <a
          href={trendyolLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group"
        >
          <Image
            src="/17808066-1740172714160(1).jpeg"
            alt="Çok Amaçlı Tencere"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
        </a>

     {/* 🎥 4 Video */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
  {panVideos.map((v, i) => (
    <div
      key={i}
      onDoubleClick={handleDoubleClick}
      className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group cursor-pointer"
    >
      <video
        src={v.src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={`${v.src}#t=0.5`}
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition"
      />
      <div className="absolute bottom-2 right-2 text-[10px] text-white bg-black/40 px-2 py-1 rounded-md opacity-70">
        📲 2 kere tıkla 💖
      </div>
    </div>
  ))}
</div>
      </section>

      {/* 🥤 El Blendırı Bölümü */}
      <section className="w-full max-w-4xl space-y-5">
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-green-700 mb-1">🥤 El Blendırı</h2>
          <p className="text-gray-600 text-sm italic">
            Sabahları detox, akşamları milkshake 💖  
            Yurt hayatında vitamin dolu içecekler yapmak için harika 🌿
          </p>
        </div>

        {/* 📸 Fotoğraf Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {blenderImages.map((src, i) => (
            <a
              key={i}
              href={trendyolLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition group"
            >
              <Image src={src} alt={`Blender ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </div>
      </section>

      {/* 🌸 Alt Bilgi Kartı */}
      <Card className="w-full sm:w-[400px] bg-white rounded-2xl shadow-sm border border-green-100 mt-6">
        <CardHeader>
          <CardTitle style={{ color: "#6cbf6d" }}>KYK LİNK</CardTitle>
          <CardDescription>
            Yurt hayatını kolaylaştıran pratik ürünlere hemen ulaş 💕  
            Her şey elinin altında olsun! 🧺
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-3">
          <a
            href={trendyolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-200 hover:bg-green-300 text-gray-900 font-bold py-2 px-5 rounded-xl transition text-center"
          >
            ✨ Ürünleri Gör
          </a>

          <button
            onClick={openInstagram}
            className="inline-block bg-pink-200 hover:bg-pink-300 text-gray-900 font-semibold py-2 px-5 rounded-xl transition text-center"
          >
            💖 Instagram Profilime Git
          </button>
        </CardContent>
      </Card>

      {/* 💬 Tatlı “Beğen & Kaydet” Notu */}
      <AnimatePresence>
        {showNote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-16 inset-x-0 flex justify-center z-50"
          >
            <div className="bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded-2xl shadow-lg border border-pink-200 text-sm">
              💬 Beğenmeyi ve kaydetmeyi unutma 💖
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default KykBoard;