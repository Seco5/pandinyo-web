import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Pandinyo gizlilik politikası: hangi verileri topladığımız, nasıl kullandığımız ve haklarınız.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      updated="23 Haziran 2026"
      intro="Pandinyo olarak gizliliğinize önem veriyoruz. Bu politika, mobil uygulamamızı ve web sitemizi kullanırken hangi verilerin toplandığını, nasıl işlendiğini ve haklarınızı açıklar."
    >
      <h2>1. Veri Sorumlusu</h2>
      <p>
        Bu uygulama ve web sitesi Pandinyo tarafından işletilmektedir. Gizlilikle
        ilgili her türlü talep için{" "}
        <a href="mailto:ozcilingirsercan@gmail.com">ozcilingirsercan@gmail.com</a>{" "}
        adresinden bize ulaşabilirsiniz.
      </p>

      <h2>2. Topladığımız Veriler</h2>
      <p>Hizmetlerimizi sunmak için aşağıdaki verileri toplayabiliriz:</p>
      <ul>
        <li>
          <strong>Hesap ve profil bilgileri:</strong> Hesap oluşturduğunuzda
          sağladığınız ad ve e-posta adresi (web demosu üyelik gerektirmez).
        </li>
        <li>
          <strong>Öğrenme ilerlemesi:</strong> Tamamlanan dersler, XP, seri günü,
          rozetler ve sektör/mod tercihleri — yalnızca ilerlemenizi cihazınızda
          ve hesabınızda saklamak için.
        </li>
        <li>
          <strong>Kullanım ve cihaz verileri:</strong> Uygulama sürümü, cihaz
          modeli, işletim sistemi ve anonim kullanım istatistikleri (hata ayıklama
          ve hizmet iyileştirme amacıyla).
        </li>
      </ul>
      <p>
        Banka/kart bilgisi, kimlik numarası gibi hassas verileri{" "}
        <strong>toplamıyoruz</strong>. Olası ödemeler ileride App Store / Google
        Play altyapısı üzerinden işlenecek olup kart bilgileriniz bize iletilmez.
      </p>

      <h2>3. Verileri Nasıl Kullanıyoruz</h2>
      <ul>
        <li>Öğrenme deneyimini sunmak ve ilerlemenizi kaydetmek</li>
        <li>Seri hatırlatıcısı gibi bildirimleri (izin verdiyseniz) göndermek</li>
        <li>Uygulamayı iyileştirmek, hataları gidermek ve güvenliği sağlamak</li>
        <li>Yasal yükümlülükleri yerine getirmek</li>
      </ul>

      <h2>4. Veri Paylaşımı</h2>
      <p>
        Verilerinizi satmıyoruz. Yalnızca hizmeti çalıştırmak için gerekli
        durumlarda (örneğin bulut altyapısı, analitik veya çökme raporlama
        sağlayıcıları) ve yasal zorunluluk halinde sınırlı olarak paylaşırız. Bu
        sağlayıcılar verilerinizi yalnızca bizim adımıza işler.
      </p>

      <h2>5. Veri Saklama</h2>
      <p>
        Verilerinizi yalnızca hizmeti sunmak için gerekli olduğu sürece saklarız.
        Hesabınızı veya verilerinizi silmek istediğinizde, talebiniz üzerine makul
        bir süre içinde kalıcı olarak sileriz.
      </p>

      <h2>6. Çocukların Gizliliği</h2>
      <p>
        Pandinyo 13 yaş altı çocuklara yönelik değildir ve bilerek bu yaş
        grubundan veri toplamayız.
      </p>

      <h2>7. Haklarınız</h2>
      <p>
        İlgili mevzuat (KVKK / GDPR) kapsamında verilerinize erişme, düzeltme,
        silme ve işlemeyi kısıtlama haklarına sahipsiniz. Talepleriniz için{" "}
        <a href="mailto:ozcilingirsercan@gmail.com">ozcilingirsercan@gmail.com</a>{" "}
        adresine yazabilirsiniz.
      </p>

      <h2>8. Değişiklikler</h2>
      <p>
        Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişikliklerde
        uygulama veya site üzerinden bilgilendirme yaparız.
      </p>

      <h2>9. İletişim</h2>
      <p>
        Sorularınız için:{" "}
        <a href="mailto:ozcilingirsercan@gmail.com">ozcilingirsercan@gmail.com</a>
      </p>
    </LegalPage>
  );
}
