"use client"
import React, { useState } from "react";
import './page.css';

const YurtEsyalariBlog = () => {
  const [kategori, setKategori] = useState("kiz");

  return (
    <div className="blog-post">
      <h1>Yurtta Kalacak Öğrenciler İçin İhtiyaç Listesi</h1>

      <div className="button-container">
      <button
    onClick={() => setKategori("kiz")}
    className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
     kategori=== "kiz"
        ? "bg-pink-500 text-white"
        : "bg-pink-100 text-pink-700 hover:bg-pink-200"
    }`}
  >
    👩‍🎓 Kız Öğrenci
  </button>

  <button
    onClick={() => setKategori("erkek")}
    className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
      kategori === "erkek"
        ? "bg-blue-500 text-white"
        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
    }`}
  >
    👨‍🎓 Erkek Öğrenci
  </button>
      </div>

      {kategori === "kiz" && (
        <div>
          <h2>Kız Öğrenciler İçin İhtiyaç Listesi</h2>
          <h3>Kıyafetler</h3>
          <ul>
            <li>Tişört, kazak, hırka, yelek, gömlek, tunik, elbise</li>
            <li>Pantolon, tayt, etek, şort</li>
            <li>Pijama</li>
            <li>Çorap (yazlık, kışlık), patik, külotlu çorap</li>
            <li>İç çamaşırları</li>
            <li>Kaban, ceket, yağmurluk, trençkot, atkı, bere, eldiven</li>
          </ul>

          <h3>Kişisel Bakım</h3>
          <ul>
            <li>Şampuan, saç kremi, duş jeli, sabun, lif</li>
            <li>Diş fırçası, diş macunu</li>
            <li>Parfüm</li>
            <li>Makyaj malzemeleri</li>
            <li>Toka</li>
            <li>Takılar</li>
          </ul>

          <h3>Duş ve Saç Bakım Gereçleri</h3>
          <ul>
            <li>Havlu, Bornoz, Saç Kurutma Makinesi, Düzleştirici</li>
          </ul>

          <h3>Yurt Hayatı İçin Gerekenler</h3>
          <ul>
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

          <h3>Elektrikli Eşyalar</h3>
          <ul>
            <li>Ütü</li>
            <li>Kettle</li>
            <li>Tost makinesi</li>
          </ul>

          <h3>Faydalı Bilgiler</h3>
          <ul>
            <li>Oda ve banyo için ayrı terlik</li>
            <li>KYK yurtlarında nevresim verilir ama kendi eşyalarınızı götürebilirsiniz</li>
            <li>Organizer, hurç, kutu gibi depolama çözümleri</li>
            <li>İlaçlar ve kişisel ilaç kutusu</li>
          </ul>
        </div>
      )}

      {kategori === "erkek" && (
        <div>
          <h2>Erkek Öğrenciler İçin İhtiyaç Listesi</h2>
          <h3>Kıyafetler</h3>
          <ul>
            <li>Tişört, kazak, hırka, gömlek</li>
            <li>Pantolon, eşofman, şort</li>
            <li>Pijama</li>
            <li>Çorap (yazlık, kışlık)</li>
            <li>İç çamaşırları</li>
            <li>Kaban, mont, yağmurluk, atkı, bere, eldiven</li>
          </ul>

          <h3>Kişisel Bakım</h3>
          <ul>
            <li>Şampuan, duş jeli, sabun, lif</li>
            <li>Diş fırçası, diş macunu</li>
            <li>Tıraş makinesi ve ürünleri</li>
            <li>Parfüm</li>
            <li>Tarak</li>
          </ul>

          <h3>Duş ve Saç Bakım Gereçleri</h3>
          <ul>
            <li>Havlu, bornoz, saç kurutma makinesi</li>
          </ul>

          <h3>Yurt Hayatı İçin Gerekenler</h3>
          <ul>
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

          <h3>Elektrikli Eşyalar</h3>
          <ul>
            <li>Ütü</li>
            <li>Kettle</li>
            <li>Tost makinesi</li>
          </ul>

          <h3>Faydalı Bilgiler</h3>
          <ul>
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
