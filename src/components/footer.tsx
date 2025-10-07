"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react"; // 👈 ok ikonları için
import GizlilikPage from "./gizlilikpage";
import KvkkPage from "./kvkkpage";

export default function SiteFooter() {
  const [activeModal, setActiveModal] = useState<"gizlilik" | "kvkk" | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <footer className="w-full border-t border-gray-200 bg-white relative z-10">
        <div className="mx-auto w-full max-w-5xl px-5 py-6 space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white text-sm font-bold">
              KH
            </div>
            <span className="text-base font-semibold text-gray-900">KYK Hub</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-5">
            Yurt hayatını kolaylaştıran içerikler, pratik araçlar ve eğlenceli deneyimler 💚
          </p>

          {/* Kategoriler (her zaman dikey) */}
          <div className="space-y-3">
            {/* Hızlı Erişim */}
            <div>
              <button
                onClick={() => toggleSection("hizli")}
                className="w-full flex justify-between items-center py-2 text-sm font-semibold text-gray-900 hover:text-green-700 transition"
              >
                Hızlı Erişim
                {openSection === "hizli" ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>
              {openSection === "hizli" && (
                <ul className="space-y-1 pl-3 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-green-700 transition">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li>
                    <Link href="/oyun" className="hover:text-green-700 transition">
                      🎮 Var Mısın Yok Musun?
                    </Link>
                  </li>
                  <li>
                    <Link href="/zikirler" className="hover:text-green-700 transition">
                      Zikir Listesi
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Kurumsal */}
            <div>
              <button
                onClick={() => toggleSection("kurumsal")}
                className="w-full flex justify-between items-center py-2 text-sm font-semibold text-gray-900 hover:text-green-700 transition"
              >
                Kurumsal
                {openSection === "kurumsal" ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>
              {openSection === "kurumsal" && (
                <ul className="space-y-1 pl-3 text-sm text-gray-600">
                  <li>
                    <button
                      onClick={() => setActiveModal("gizlilik")}
                      className="hover:text-green-700 transition"
                    >
                      Gizlilik Politikası
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveModal("kvkk")}
                      className="hover:text-green-700 transition"
                    >
                      KVKK Aydınlatma Metni
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:rumeysaaslanp@gmail.com"
                      className="hover:text-green-700 transition"
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Bağlantılar */}
            <div>
              <button
                onClick={() => toggleSection("baglantilar")}
                className="w-full flex justify-between items-center py-2 text-sm font-semibold text-gray-900 hover:text-green-700 transition"
              >
                Bağlantılar
                {openSection === "baglantilar" ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>
              {openSection === "baglantilar" && (
                <ul className="space-y-1 pl-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://www.instagram.com/rumeyscode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-700 transition"
                    >
                      💖 Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ty.gl/5wpwefo2hwe3i"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-700 transition"
                    >
                      🧺 Ürün Linki (Trendyol)
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Alt Bilgi */}
          <div className="mt-5 border-t border-gray-200 pt-3 flex flex-col items-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} KYK Hub. Tüm hakları saklıdır.</p>
            <p className="mt-1">
              Made with 💚 by{" "}
              <a
                href="https://www.instagram.com/rumeyscode"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-800 hover:text-green-700 transition"
              >
                rumeyscode
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative p-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-lg"
            >
              ✕
            </button>
            {activeModal === "gizlilik" && <GizlilikPage />}
            {activeModal === "kvkk" && <KvkkPage />}
          </div>
        </div>
      )}
    </>
  );
}