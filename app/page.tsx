import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ModulesShowcase } from "@/components/sections/ModulesShowcase";
import { StreakExplainer } from "@/components/sections/StreakExplainer";
import { StoryMode } from "@/components/sections/StoryMode";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { Footer } from "@/components/sections/Footer";
import { MiniDemo } from "@/components/demo/MiniDemo";
import { Pill } from "@/components/ui/Card";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* 3. Sektör seçimi + canlı mini demo — sayfanın en kritik bölümü */}
      <section id="mini-demo" className="border-y border-border bg-surface py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Pill className="mb-4">Canlı Demo</Pill>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Okuma, dene. Şimdi, burada.
            </h2>
            <p className="mt-3 max-w-md text-secondary">
              Bir sektör seç ve kelime kartı modülünü hemen çöz. Kayıt yok,
              kurulum yok — tıpkı uygulamadaki gibi. Kartlara dokununca Türkçe
              anlamı ve örnek cümlesi çıkar.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-secondary">
              <li>✅ 6 sektöre özel gerçek iş kelimesi</li>
              <li>✅ Çevirmeli kart animasyonu</li>
              <li>✅ İlerleme çubuğu ile modül akışı</li>
            </ul>
          </div>
          <MiniDemo />
        </div>
      </section>

      <ModulesShowcase />
      <StreakExplainer />
      <StoryMode />
      <PricingTeaser />
      <Footer />
    </main>
  );
}
