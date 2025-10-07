"use client";
import React from "react";

export default function KvkkPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
      </h1>

      <p className="mb-4">
        İşbu aydınlatma metni, <strong>kykhub.com</strong> (“Site”) tarafından
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında,
        kullanıcıların kişisel verilerinin işlenmesi, saklanması ve korunmasına
        ilişkin yükümlülüklerin açıklanması amacıyla hazırlanmıştır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Veri Sorumlusu</h2>
      <p className="mb-4">
        <strong>Veri Sorumlusu:</strong> kykhub.com  
        <br />
        <strong>E-posta:</strong>{" "}
        <a href="mailto:rumeysaaslanp@gmail.com" className="text-green-700 underline">
          rumeysaaslanp@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. İşlenen Kişisel Veriler</h2>
      <p className="mb-4">
        kykhub.com üzerinde herhangi bir kişisel veri toplanmamaktadır.
        Kullanıcılar yalnızca bilgilendirme amacıyla siteyi ziyaret etmektedir.
        Site, kullanıcıların kimlik, iletişim veya konum bilgilerini toplamaz,
        saklamaz ve üçüncü taraflarla paylaşmaz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Çerez (Cookie) Kullanımı</h2>
      <p className="mb-4">
        kykhub.com kullanıcı deneyimini geliştirmek amacıyla çerez kullanmaz.
        Ziyaret verileri anonimdir ve kimlik bilgisi içermez.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Veri Aktarımı</h2>
      <p className="mb-4">
        Herhangi bir kişisel veri toplanmadığı için, yurt içi veya yurt dışına
        veri aktarımı yapılmamaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Kullanıcı Hakları</h2>
      <p className="mb-4">
        KVKK’nın 11. maddesi uyarınca kullanıcılar, kişisel verilerinin
        işlenip işlenmediğini öğrenme hakkına sahiptir. Ancak kykhub.com
        herhangi bir veri işlemediği için bu haklara ilişkin özel bir süreç
        uygulanmamaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. İletişim</h2>
      <p className="mb-4">
        KVKK kapsamındaki tüm sorular için bizimle aşağıdaki e-posta adresi
        üzerinden iletişime geçebilirsiniz:
      </p>
      <p className="font-medium">
        <strong>E-posta:</strong>{" "}
        <a href="mailto:rumeysaaslanp@gmail.com" className="text-green-700 underline">
          rumeysaaslanp@gmail.com
        </a>
      </p>

      <p className="mt-8 text-sm text-gray-500 italic">
        Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}
      </p>
    </div>
  );
}