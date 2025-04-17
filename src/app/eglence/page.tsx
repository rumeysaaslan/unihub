'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const mediaItems = [
  // 🎬 FİLMLER
  {
    type: "film",
    title: "Dead Poets Society",
    description: "“Carpe Diem” ruhunu iliklerine kadar hissettiren unutulmaz bir film.",
    image: "https://m.media-amazon.com/images/I/617-2I06oGL.jpg",
    link: "https://tr.wikipedia.org/wiki/Ölü_Ozanlar_Derneği"
  },
  {
    type: "film",
    title: "Little Women (2019)",
    description: "Sıcak ve nostaljik bir dönem filmi: kız kardeşlik ve büyümek üzerine.",
    image: "https://tr.web.img3.acsta.net/pictures/18/06/19/12/41/0798806.jpg",
    link: "https://tr.wikipedia.org/wiki/Küçük_Kadınlar_(2019_film)"
  },
  {
    type: "film",
    title: "Midnight in Paris",
    description: "Zaman yolculuğu + Paris’in büyülü sokaklarında nostalji dolu bir gece.",
    image: "https://tr.web.img3.acsta.net/medias/nmedia/18/86/05/04/19819885.jpg",
    link: "https://tr.wikipedia.org/wiki/Paris'te_Bir_Gece_Yarısı"
  },
  {
    type: "film",
    title: "3 Idiots",
    description: "Üniversite sistemi ve dostluk üzerine bol kahkahalı, düşündürücü bir yapım.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:500",
    link: "https://tr.wikipedia.org/wiki/3_Aptal"
  },
  {
    type: "film",
    title: "The Pursuit of Happyness",
    description: "Azim, mücadele ve baba-oğul ilişkisi üzerine ilham verici bir film.",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
    link: "https://tr.wikipedia.org/wiki/Umut_Işığı"
  },
  {
    type: "film",
    title: "The Theory of Everything",
    description: "Stephen Hawking’in hayatı ve bilime olan tutkusu üzerine etkileyici bir film.",
    image: "https://m.media-amazon.com/images/S/pv-target-images/ab0c20b963b3b1425fa85953f593624494b4de97976644f629117af2ad3a3cb6.jpg",
    link: "https://tr.wikipedia.org/wiki/Her_Şeyin_Teorisi"
  },
  {
    type: "film",
    title: "Forrest Gump",
    description: "Hayatın iniş çıkışlarını sade ama çarpıcı şekilde anlatan klasik bir film.",
    image: "https://m.media-amazon.com/images/I/71xzEu8NuJL.jpg",
    link: "https://tr.wikipedia.org/wiki/Forrest_Gump"
  },
  {
    type: "film",
    title: "Inside Out",
    description: "Duyguların iç dünyası üzerine eğlenceli ve duygusal bir animasyon.",
    image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    link: "https://tr.wikipedia.org/wiki/Ters_Yüz_(film)"
  },

  // 📚 KİTAPLAR
  {
    type: "kitap",
    title: "Simyacı",
    description: "Kendini bulma yolculuğunda ilham verici bir kitap.",
    image: "https://covers.storytel.com/jpg-640/9789180128025.edabbb72-cc9b-4312-8f34-d55bb1f033c5?optimize=high&quality=70",
    link: "https://www.goodreads.com/kitap/show/865.The_Alchemist"
  },
  {
    type: "kitap",
    title: "Martı – Jonathan Livingston",
    description: "Özgürlük, farklılık ve azim üzerine kısa ama derin bir öykü.",
    image: "https://edebiyathocam.com.tr/wp-content/uploads/2024/03/marti.png",
    link: "https://tr.wikipedia.org/wiki/Martı_(kitap)"
  },
  {
    type: "kitap",
    title: "Küçük Prens",
    description: "Herkesin çocuk kalbine dokunan sade ama derin bir hikaye.",
    image: "https://www.canyayinlari.com/productimages/118452/big/9789750724435_front_cover.jpg",
    link: "https://tr.wikipedia.org/wiki/Küçük_Prens"
  },
  {
    type: "kitap",
    title: "Hayvan Çiftliği",
    description: "Güç ilişkilerini hicveden kısa ve çarpıcı bir klasik.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11447395/wh:true/wi:800",
    link: "https://tr.wikipedia.org/wiki/Hayvan_Çiftliği"
  },
  {
    type: "kitap",
    title: "Şeker Portakalı",
    description: "Zezé'nin çocukluğundan, hayallerinden ve kalbinden izler taşıyan dokunaklı bir hikâye.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11462950/wh:true/wi:800",
    link: "https://tr.wikipedia.org/wiki/Şeker_Portakalı_(roman)"
  },
  {
    type: "kitap",
    title: "Sofie’nin Dünyası",
    description: "Felsefeye giriş için sürükleyici ve öğretici bir roman.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11783714/wh:true/wi:800",
    link: "https://tr.wikipedia.org/wiki/Sofie'nin_Dünyası"
  },
  {
    type: "kitap",
    title: "İçimizdeki Şeytan",
    description: "Sabahattin Ali’den birey-toplum ilişkisini sorgulatan bir başyapıt.",
    image: "https://www.iskultur.com.tr/webp/2020/01/icimizdekiseytab.jpg",
    link: "https://tr.wikipedia.org/wiki/İçimizdeki_Şeytan"
  }
]

export default function MediaGallery() {
  const [activeType, setActiveType] = useState("film");

  const filteredItems = mediaItems.filter((item) => item.type === activeType);

  return (
    <div className="flex flex-col items-center justify-center p-1 bg-[#efe8dd] min-h-screen space-y-4">
           <h2 className="text-2xl font-bold text-center mb-6">✨ Bugünün Mood’u: Film mi Kitap mı? </h2>
      <div className="space-x-4">
        <button
          className={`px-4 py-2 rounded-full ${
            activeType === "kitap" ? "bg-pink-300" : "bg-white"
          }`}
          onClick={() => setActiveType("kitap")}
        >
          📚 Kitap Modu
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeType === "film" ? "bg-pink-300" : "bg-white"
          }`}
          onClick={() => setActiveType("film")}
        >
          🎬 Film Modu
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 cursor-pointer w-72">
              <div className="relative w-full h-96 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}