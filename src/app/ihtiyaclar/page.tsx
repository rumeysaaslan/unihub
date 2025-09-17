"use client"
import React from "react";
import  { useState } from "react";
import "./page.css";

interface Item {
  name: string;
  checked: boolean;
}

interface Category {
  title: string;
  items: Item[];
}

interface NeedsList {
  type: "kiz" | "erkek";
  title: string;
  categories: Category[];
}

const lists: NeedsList[] = [
  {
    type: "kiz",
    title: "Kız Öğrenciler İçin İhtiyaç Listesi",
    categories: [
          {
      title: "Kıyafetler",
      items: [
        { name: "Tişört, kazak, hırka, yelek, gömlek \n tunik, elbise", checked: false },
        { name: "Pantolon, tayt, etek, şort", checked: false },
        { name: "Pijama", checked: false },
        { name: "Çorap (yazlık, kışlık), patik, külotlu çorap", checked: false },
        { name: "İç çamaşırları", checked: false },
        { name: "Kaban, ceket, yağmurluk, trençkot, atkı \n bere, eldiven", checked: false },
      ],
    },
    {
      title: "Kişisel Bakım",
      items: [
        { name: "Şampuan, saç kremi, duş jeli, sabun, lif", checked: false },
        { name: "Diş fırçası, diş macunu", checked: false },
        { name: "Parfüm", checked: false },
        { name: "Makyaj malzemeleri", checked: false },
        { name: "Toka", checked: false },
        { name: "Takılar", checked: false },
      ],
    },
    {
      title: "Duş ve Saç Bakım Gereçleri",
      items: [
        { name: "Havlu", checked: false },
        { name: "Bornoz", checked: false },
        { name: "Saç Kurutma Makinesi", checked: false },
        { name: "Düzleştirici", checked: false },
      ],
    },
    {
      title: "Yurt Hayatı İçin Gerekenler",
      items: [
        { name: "Terlik", checked: false },
        { name: "Askı", checked: false },
        { name: "Minik battaniye", checked: false },
        { name: "Asma kilit ve zincir", checked: false },
        { name: "Kutu, organizer", checked: false },
        { name: "Çamaşır sepeti, çamaşır biriktirme poşeti veya filesi", checked: false },
        { name: "Uzatma kablosu, çoklu priz", checked: false },
        { name: "Küçük dikiş seti", checked: false },
        { name: "Deterjan, yumuşatıcı, bulaşık deterjanı", checked: false },
        { name: "Kupa, çatal, kaşık, tabak, kase, bıçak", checked: false },
        { name: "Kırtasiye ürünleri", checked: false },
        { name: "Uyku bandı", checked: false },
      ],
    },
    {
      title: "Elektrikli Eşyalar",
      items: [
        { name: "Ütü", checked: false },
        { name: "Kettle", checked: false },
        { name: "Tost makinesi", checked: false },
      ],
    },
    {
      title: "Faydalı Bilgiler",
      items: [
        { name: "Oda ve banyo için ayrı terlik", checked: false },
        { name: "KYK yurtlarında nevresim verilir ama \n kendi eşyalarınızı götürebilirsiniz", checked: false },
        { name: "Organizer, hurç, kutu gibi depolama çözümleri", checked: false },
        { name: "İlaçlar ve kişisel ilaç kutusu", checked: false },
      ],
    },

    ],
  },
  {
    type: "erkek",
    title: "Erkek Öğrenciler İçin İhtiyaç Listesi",
    categories: [
      {
      title: "Kıyafetler",
      items: [
        { name: "Tişört, kazak, hırka, gömlek", checked: false },
        { name: "Pantolon, eşofman, şort", checked: false },
        { name: "Pijama", checked: false },
        { name: "Çorap (yazlık, kışlık)", checked: false },
        { name: "İç çamaşırları", checked: false },
        { name: "Kaban, mont, yağmurluk, atkı \n bere, eldiven", checked: false },
      ],
    },
    {
      title: "Kişisel Bakım",
      items: [
        { name: "Şampuan, duş jeli, sabun, lif", checked: false },
        { name: "Diş fırçası, diş macunu", checked: false },
        { name: "Tıraş makinesi ve ürünleri", checked: false },
        { name: "Parfüm", checked: false },
        { name: "Tarak", checked: false },
      ],
    },
    {
      title: "Duş ve Saç Bakım Gereçleri",
      items: [
        { name: "Havlu", checked: false },
        { name: "Bornoz", checked: false },
        { name: "Saç kurutma makinesi", checked: false },
      ],
    },
    {
      title: "Yurt Hayatı İçin Gerekenler",
      items: [
          { name: "Terlik", checked: false },
        { name: "Askı", checked: false },
        { name: "Minik battaniye", checked: false },
        { name: "Asma kilit ve zincir", checked: false },
        { name: "Kutu, organizer", checked: false },
        { name: "Çamaşır sepeti, çamaşır biriktirme poşeti veya filesi", checked: false },
        { name: "Uzatma kablosu, çoklu priz", checked: false },
        { name: "Küçük dikiş seti", checked: false },
        { name: "Deterjan, yumuşatıcı, bulaşık deterjanı", checked: false },
        { name: "Kupa, çatal, kaşık, tabak, kase, bıçak", checked: false },
        { name: "Kırtasiye ürünleri", checked: false },
        { name: "Uyku bandı", checked: false },
      ],
    },
    {
      title: "Elektrikli Eşyalar",
      items: [
        { name: "Ütü", checked: false },
        { name: "Kettle", checked: false },
        { name: "Tost makinesi", checked: false },
      ],
    },
    {
      title: "Faydalı Bilgiler",
      items: [
        { name: "Terlikleri oda ve duş için ayırmak faydalıdır", checked: false },
        { name: "Kendi nevresim takımlarınızı götürmek \n konfor sağlar", checked: false },
        { name: "Organizer ürünleri dolap düzeni sağlar", checked: false },
        { name: "İlaçlarınızı unutmayın", checked: false },
      ],
    },

    ],
  },
];

export default function Needs() {
  const [kategori, setKategori] = useState<"kiz" | "erkek">("kiz");
  const [data, setData] = useState<NeedsList[]>(lists);

  const handleToggle = (catIndex: number, itemIndex: number) => {
    setData((prev) =>
      prev.map((list) =>
        list.type === kategori
          ? {
              ...list,
              categories: list.categories.map((cat, ci) =>
                ci === catIndex
                  ? {
                      ...cat,
                      items: cat.items.map((item, ii) =>
                        ii === itemIndex ? { ...item, checked: !item.checked } : item
                      ),
                    }
                  : cat
              ),
            }
          : list
      )
    );
  };

  const currentList = data.find((l) => l.type === kategori);

  return (
    <div className="needs-container">
      {/* Üst Butonlar */}
      <div className="needs-tabs">
        <button
          className={`tab-button ${kategori === "kiz" ? "active" : ""}`}
          onClick={() => setKategori("kiz")}
        >
          👩‍🎓 Kız Öğrenci
        </button>
        <button
          className={`tab-button ${kategori === "erkek" ? "active" : ""}`}
          onClick={() => setKategori("erkek")}
        >
          👨‍🎓 Erkek Öğrenci
        </button>
      </div>

      <h2 className="needs-title">{currentList?.title}</h2>

      {currentList?.categories.map((cat, catIndex) => (
        <div key={catIndex} className="needs-card">
          <h3 className="needs-subtitle">{cat.title}</h3>
          {cat.items.map((item, itemIndex) => (
            <label key={itemIndex} className="needs-item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(catIndex, itemIndex)}
              />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
