import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/content/site";

export const metadata: Metadata = {
  title: "Destek",
  description:
    "Pandinyo destek merkezi — sık sorulan sorular, hesap ve veri silme, iletişim.",
};

export default function SupportPage() {
  return (
    <LegalPage
      title="Destek"
      intro="Pandinyo ile ilgili en sık sorulan sorular ve yardım. Aradığınızı bulamazsanız bize yazmaktan çekinmeyin."
    >
      <h2>Sık Sorulan Sorular</h2>

      <h3>Pandinyo ücretsiz mi?</h3>
      <p>
        Evet. Tüm temel içerik şu an ücretsizdir. İleride sunulabilecek premium
        özellikler App Store / Google Play üzerinden ayrıca duyurulacaktır.
      </p>

      <h3>Üyelik gerekiyor mu?</h3>
      <p>
        Web üzerindeki demoyu denemek için üyelik gerekmez. Mobil uygulamada
        ilerlemenizin kaydedilmesi için hesap oluşturmanız gerekebilir.
      </p>

      <h3>Seri (streak) nasıl çalışır?</h3>
      <p>
        Her gün en az bir ders tamamladığınızda seriniz uzar. Bir gün
        kaçırırsanız seri sıfırlanır — pandanız da ruh haline göre değişir.
      </p>

      <h3>İlerlemem neden kayboldu?</h3>
      <p>
        İlerleme cihazınızda ve hesabınızda saklanır. Uygulamayı silip yeniden
        yüklediyseniz veya farklı bir cihaz kullanıyorsanız aynı hesapla giriş
        yaptığınızdan emin olun.
      </p>

      <h2>Hesap ve Veri Silme</h2>
      <p>
        Hesabınızı ve ilişkili tüm verilerinizi silmek isterseniz,{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>{" "}
        adresine &quot;Hesap Silme&quot; konulu bir e-posta gönderin. Talebiniz
        en geç 30 gün içinde işleme alınır ve verileriniz kalıcı olarak silinir.
      </p>

      <h2>Hâlâ yardıma mı ihtiyacınız var?</h2>
      <p>
        Bize{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>{" "}
        adresinden ulaşın; genellikle 1–2 iş günü içinde yanıt veriyoruz. Daha
        hızlı çözüm için cihaz modelinizi ve uygulama sürümünüzü belirtmeniz
        yardımcı olur.
      </p>
    </LegalPage>
  );
}
