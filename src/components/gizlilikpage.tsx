"use client";
import React from "react";

export default function GizlilikPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Gizlilik Politikası</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Giriş</h2>
        <p>
          Bu gizlilik politikası, <strong>kykhub.com</strong> web sitesinin
          kullanıcılarından herhangi bir kişisel veri toplayıp toplamadığına
          ve bu verilerin nasıl işlendiğine ilişkin bilgi vermek amacıyla
          hazırlanmıştır. kykhub.com, herhangi bir kurum veya kuruluşla resmî
          bir bağı bulunmayan bağımsız bir platformdur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Kişisel Verilerin Toplanması</h2>
        <p>
          kykhub.com kullanıcılarından hiçbir kişisel bilgi (isim, e-posta,
          konum, cihaz bilgisi vb.) talep etmemekte ve toplamamaktadır.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Verilerin Kullanımı</h2>
        <p>
          Site yalnızca bilgilendirme ve içerik paylaşımı amacıyla çalışmaktadır.
          Herhangi bir analiz, pazarlama veya reklam amacı güdülmemektedir.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Üçüncü Taraf Hizmetler</h2>
        <p>
          kykhub.com, herhangi bir reklam, analiz veya izleme hizmeti kullanmaz.
          Kullanıcı gizliliği tam olarak korunmaktadır.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Sorumluluk Reddi</h2>
        <p>
          Sitede sunulan bilgiler bilgilendirme amaçlıdır. kykhub.com,
          içeriklerin doğruluğu veya güncelliği konusunda garanti vermez.
          Kullanıcılar, resmî kaynaklardan bilgi doğrulaması yapmalıdır.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Değişiklik Hakkı</h2>
        <p>
          Bu politika, geliştirici tarafından gerekli görüldüğünde güncellenebilir.
          Değişiklikler sitede yayınlandığı anda geçerli olur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. İletişim</h2>
        <p>
          Gizlilik politikasıyla ilgili her türlü görüş ve öneri için bizimle
          iletişime geçebilirsiniz:
        </p>
        <a
          href="mailto:rumeysaaslanp@gmail.com"
          className="text-green-700 underline mt-2 inline-block"
        >
          rumeysaaslanp@gmail.com
        </a>
      </section>

      <p className="text-sm text-gray-500 italic">
        Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}
      </p>
    </div>
  );
}