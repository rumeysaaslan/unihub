"use client"
import React, { useState } from "react";
import './page.css';

const YurtEsyalariBlog = () => {
  const [kategori, setKategori] = useState("kiz");

  return (
    <div className="blog-post">
    <h1 className="text-[#2d2d2d]">Yurtta Kalacak Öğrenciler İçin İhtiyaç Listesi</h1>
  
    <div className="button-container">
      <button
        onClick={() => setKategori("kiz")}
        className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
          kategori === "kiz"
            ? "bg-[#d8e9c4] text-[#2d2d2d]"  // Pastel yeşili
            : "bg-[#fcfdf2] text-[#2d2d2d] hover:bg-[#d8e9c4]" // Muz tonu ve hover pastel yeşili
        }`}
      >
        👩‍🎓 Kız Öğrenci
      </button>
  
      <button
        onClick={() => setKategori("erkek")}
        className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
          kategori === "erkek"
            ? "bg-[#d8e9c4] text-[#2d2d2d]" // Pastel yeşili
            : "bg-[#fcfdf2] text-[#2d2d2d] hover:bg-[#d8e9c4]" // Muz tonu ve hover pastel yeşili
        }`}
      >
        👨‍🎓 Erkek Öğrenci
      </button>
    </div>
  
    {kategori === "kiz" && (
      <div className="bg-[#fcfdf2] p-4 rounded-lg">
        <h2 className="text-[#2d2d2d]">Kız Öğrenciler İçin İhtiyaç Listesi</h2>
        <h3 className="text-[#2d2d2d]">Kıyafetler</h3>
        <ul className="list-disc ml-6">
          <li>Tişört, kazak, hırka, yelek, gömlek, tunik, elbise</li>
          <li>Pantolon, tayt, etek, şort</li>
          <li>Pijama</li>
          <li>Çorap (yazlık, kışlık), patik, külotlu çorap</li>
          <li>İç çamaşırları</li>
          <li>Kaban, ceket, yağmurluk, trençkot, atkı, bere, eldiven</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Kişisel Bakım</h3>
        <ul className="list-disc ml-6">
          <li>Şampuan, saç kremi, duş jeli, sabun, lif</li>
          <li>Diş fırçası, diş macunu</li>
          <li>Parfüm</li>
          <li>Makyaj malzemeleri</li>
          <li>Toka</li>
          <li>Takılar</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Duş ve Saç Bakım Gereçleri</h3>
        <ul className="list-disc ml-6">
          <li>Havlu, Bornoz, Saç Kurutma Makinesi, Düzleştirici</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Yurt Hayatı İçin Gerekenler</h3>
        <ul className="list-disc ml-6">
          <li>Terlik</li>
          <li>Askı</li>
          <li>Nevresim takımı, yastık, yorgan, minik battaniye, alez</li>
          <li>Asma kilit ve zincir</li>
          <li>Kutu, organizer</li>
          <li>Çamaşır sepeti, mandal, çamaşır ipi</li>
          <li>Uzatma kablosu, çoklu priz</li>
          <li>Küçük dikiş seti</li>
          <li>Deterjan, yumuşatıcı, bulaşık deterjanı</li>
          <li>Kupa, çatal, kaşık, tabak, kase, bıçak</li>
          <li>Kırtasiye ürünleri</li>
          <li>Uyku bandı</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Elektrikli Eşyalar</h3>
        <ul className="list-disc ml-6">
          <li>Ütü</li>
          <li>Kettle</li>
          <li>Tost makinesi</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Faydalı Bilgiler</h3>
        <ul className="list-disc ml-6">
          <li>Oda ve banyo için ayrı terlik</li>
          <li>KYK yurtlarında nevresim verilir ama kendi eşyalarınızı götürebilirsiniz</li>
          <li>Organizer, hurç, kutu gibi depolama çözümleri</li>
          <li>İlaçlar ve kişisel ilaç kutusu</li>
        </ul>
      </div>
    )}
  
    {kategori === "erkek" && (
      <div className="bg-[#fcfdf2] p-4 rounded-lg">
        <h2 className="text-[#2d2d2d]">Erkek Öğrenciler İçin İhtiyaç Listesi</h2>
        <h3 className="text-[#2d2d2d]">Kıyafetler</h3>
        <ul className="list-disc ml-6">
          <li>Tişört, kazak, hırka, gömlek</li>
          <li>Pantolon, eşofman, şort</li>
          <li>Pijama</li>
          <li>Çorap (yazlık, kışlık)</li>
          <li>İç çamaşırları</li>
          <li>Kaban, mont, yağmurluk, atkı, bere, eldiven</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Kişisel Bakım</h3>
        <ul className="list-disc ml-6">
          <li>Şampuan, duş jeli, sabun, lif</li>
          <li>Diş fırçası, diş macunu</li>
          <li>Tıraş makinesi ve ürünleri</li>
          <li>Parfüm</li>
          <li>Tarak</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Duş ve Saç Bakım Gereçleri</h3>
        <ul className="list-disc ml-6">
          <li>Havlu, bornoz, saç kurutma makinesi</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Yurt Hayatı İçin Gerekenler</h3>
        <ul className="list-disc ml-6">
          <li>Terlik</li>
          <li>Askı</li>
          <li>Nevresim takımı, yastık, yorgan, battaniye</li>
          <li>Asma kilit</li>
          <li>Kutu, organizer</li>
          <li>Çamaşır sepeti, mandal, ip</li>
          <li>Uzatma kablosu, priz</li>
          <li>Deterjan, yumuşatıcı, bulaşık deterjanı</li>
          <li>Kupa, çatal, kaşık, tabak, kase</li>
          <li>Kırtasiye ürünleri</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Elektrikli Eşyalar</h3>
        <ul className="list-disc ml-6">
          <li>Ütü</li>
          <li>Kettle</li>
          <li>Tost makinesi</li>
        </ul>
  
        <h3 className="text-[#2d2d2d]">Faydalı Bilgiler</h3>
        <ul className="list-disc ml-6">
          <li>Terlikleri oda ve duş için ayırmak faydalıdır</li>
          <li>Kendi nevresim takımlarınızı götürmek konfor sağlar</li>
          <li>Organizer ürünleri dolap düzeni sağlar</li>
          <li>İlaçlarınızı unutmayın</li>
        </ul>
      </div>
    )}
  </div>
  );
};

export default YurtEsyalariBlog;
