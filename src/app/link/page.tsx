"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function KykBoard() {
  const panVideos = [
    { src: "/video-1759739346-1.MP4" },
    { src: "/video-1759762238-1.MP4" },
    { src: "/video-1759762440-1.MP4" },
    { src: "/video-1759762641-1.MP4" },
  ];

  const blenderImages = ["/blender1.jpeg", "/blender2.jpeg", "/blender3.jpeg", "/blender4.jpeg"];

  // 💖 Instagram yönlendirme fonksiyonu
  const openInstagram = () => {
    const username = "rumeyscode"; // 🔹 senin kullanıcı adın
    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://www.instagram.com/${username}/`;

    // Uygulama açmayı dene
    const start = Date.now();
    const timeout = setTimeout(() => {
      // Eğer 1.5 saniye içinde app açılmazsa web versiyonuna yönlendir
      if (Date.now() - start < 1600) window.location.href = webLink;
    }, 1000);

    window.location.href = appLink;

    window.addEventListener("blur", () => clearTimeout(timeout));
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
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/17808066-1740172714160(1).jpeg"
            alt="Çok Amaçlı Tencere"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🎥 4 Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {panVideos.map((v, i) => (
            <div
              key={i}
              className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <video
                src={v.src}
                controls
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
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

        {/* Fotoğraf Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {blenderImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition"
            >
              <Image src={src} alt={`Blender ${i + 1}`} fill className="object-cover" />
            </div>
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
            href="https://ty.gl/5wpwefo2hwe3i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-200 hover:bg-green-300 text-gray-900 font-bold py-2 px-5 rounded-xl transition text-center"
          >
            ✨ Ürünleri Gör
          </a>

          {/* 💖 Instagram yönlendirmesi */}
          <button
            onClick={openInstagram}
            className="inline-block bg-pink-200 hover:bg-pink-300 text-gray-900 font-semibold py-2 px-5 rounded-xl transition text-center"
          >
            💖 Instagram Profilime Git
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default KykBoard;