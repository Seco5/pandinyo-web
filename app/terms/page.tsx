import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "Pandinyo kullanım koşulları ve son kullanıcı lisans sözleşmesi (EULA).",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      updated="23 Haziran 2026"
      intro="Pandinyo uygulamasını ve web sitesini kullanarak aşağıdaki koşulları kabul etmiş olursunuz. Lütfen dikkatle okuyun."
    >
      <h2>1. Hizmetin Tanımı</h2>
      <p>
        Pandinyo, sektöre özel iş İngilizcesini oyunlaştırılmış derslerle öğreten
        bir mobil uygulama ve tanıtım web sitesidir. Hizmet, eğitim ve bilgi
        amaçlıdır.
      </p>

      <h2>2. Kullanım Lisansı</h2>
      <p>
        Size, Pandinyo&apos;yu kişisel ve ticari olmayan amaçlarla kullanmanız
        için sınırlı, münhasır olmayan, devredilemez bir lisans veriyoruz.
        Uygulamayı kopyalayamaz, değiştiremez, tersine mühendislik yapamaz veya
        izinsiz dağıtamazsınız.
      </p>

      <h2>3. Kullanıcı Yükümlülükleri</h2>
      <ul>
        <li>Hizmeti yasalara aykırı biçimde kullanmamak</li>
        <li>Sistemin güvenliğini tehlikeye atacak işlemlerde bulunmamak</li>
        <li>Başkalarının haklarını ihlal eden içerik üretmemek veya paylaşmamak</li>
      </ul>

      <h2>4. İçerik ve Fikri Mülkiyet</h2>
      <p>
        Uygulamadaki tüm içerik, ders metinleri, panda maskotu, marka ve
        görseller dahil olmak üzere Pandinyo&apos;ya aittir ve fikri mülkiyet
        yasalarıyla korunur. İzinsiz kullanılamaz.
      </p>

      <h2>5. Ücretler ve Abonelikler</h2>
      <p>
        Mevcut sürümde temel içerik ücretsizdir. İleride sunulabilecek premium
        özellikler için ücretlendirme App Store / Google Play üzerinden yapılır ve
        ilgili mağazanın kuralları geçerlidir. Abonelik iptali ve iade işlemleri
        ilgili mağaza üzerinden yönetilir.
      </p>

      <h2>6. Sorumluluğun Sınırlandırılması</h2>
      <p>
        Hizmet &quot;olduğu gibi&quot; sunulur. Pandinyo, hizmetin kesintisiz veya
        hatasız olacağını garanti etmez. Yasaların izin verdiği ölçüde, dolaylı
        veya arızi zararlardan sorumlu tutulamayız.
      </p>

      <h2>7. Hizmetin Sonlandırılması</h2>
      <p>
        Bu koşulları ihlal etmeniz halinde erişiminizi askıya alma veya
        sonlandırma hakkımız saklıdır.
      </p>

      <h2>8. Değişiklikler</h2>
      <p>
        Bu koşulları zaman zaman güncelleyebiliriz. Güncel sürüm bu sayfada
        yayımlanır; kullanmaya devam etmeniz değişiklikleri kabul ettiğiniz
        anlamına gelir.
      </p>

      <h2>9. İletişim</h2>
      <p>
        Sorularınız için:{" "}
        <a href="mailto:ozcilingirsercan@gmail.com">ozcilingirsercan@gmail.com</a>
      </p>
    </LegalPage>
  );
}
