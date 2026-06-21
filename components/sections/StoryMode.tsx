import Image from "next/image";
import { Lock, Smartphone, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";

// Mobil src/data/story.ts — kariyer zinciri (careerCards) ve merdiven seviyeleri
const ladder = [
  { n: 1, role: "Intern", tr: "Stajyer", color: "#1D4ED8" },
  { n: 2, role: "Junior Analyst", tr: "Uzman Yardımcısı", color: "#15803D" },
  { n: 3, role: "Manager", tr: "Müdür", color: "#C2410C" },
  { n: 4, role: "Director", tr: "Direktör", color: "#7C3AED" },
  { n: 5, role: "CEO", tr: "Genel Müdür", color: "#FF9F1C" },
];

export function StoryMode() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-20 text-white">
      {/* arka plan ışıması */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Üst başlık + mobil rozeti */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-ink">
            <Smartphone size={16} /> Sadece mobil uygulamada
          </span>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Story Mode — sektörde ilk ve tek{" "}
            <span className="text-accent">interaktif kariyer yolu</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Pandinyo&apos;da sadece kelime ezberlemezsin — bir kariyer yaşarsın.
            Stajyer olarak işe başlar, her bölümde gerçek iş senaryolarında
            İngilizce kararlar verir ve seçimlerinle ya zirveye çıkar ya da
            işten çıkarılırsın. Bu deneyim başka hiçbir dil uygulamasında yok.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Kariyer merdiveni görseli (mobil src/assets/story/career_ladder.png) */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-accent/10 to-transparent blur-2xl" />
            <Image
              src="/story/career_ladder.png"
              alt="Pandinyo kariyer basamakları: Intern, Junior Analyst, Manager, Director, CEO"
              width={980}
              height={796}
              className="relative w-full max-w-md drop-shadow-2xl"
              priority={false}
            />
          </div>

          {/* Basamak listesi + anlatım */}
          <div>
            <ol className="space-y-2.5">
              {ladder.map((l) => (
                <li
                  key={l.n}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 transition hover:bg-white/[0.08]"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                    style={{ background: l.color }}
                  >
                    {l.n}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold leading-tight">{l.role}</p>
                    <p className="text-xs text-white/50">{l.tr}</p>
                  </div>
                  {l.n === 5 && <span className="text-xl">👑</span>}
                </li>
              ))}
            </ol>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <TrendingUp size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong className="text-white">10 bölümlük hikâye kartları:</strong>{" "}
                  İlk Adım, Yöneticilik Yolu, Zirveye Son Adım — her biri seni bir
                  üst kademeye taşır.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong className="text-white">Kararların sonucu var:</strong>{" "}
                  Toplantıda susmak, zammı istememek ya da kötü haberi saklamak —
                  her seçim kariyerini değiştirir.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Lock size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong className="text-white">★★★ ile kilit aç:</strong>{" "}
                  Bir kartı &quot;Yükselen Yıldız&quot; olarak bitirince bir sonraki
                  kademe açılır. Global Manager ve Startup Founder seni bekliyor.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* İndirme CTA — hooded panda hero ile */}
        <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:justify-between sm:p-9">
          <div className="flex items-center gap-5">
            <Image
              src="/story/panda_hero.png"
              alt="Pandinyo maskotu — dizüstü bilgisayar başında"
              width={160}
              height={130}
              className="hidden w-32 drop-shadow-xl sm:block"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-extrabold sm:text-2xl">
                Kariyerine telefonundan başla
              </h3>
              <p className="mt-1 max-w-md text-sm text-white/60">
                Story Mode, seri sistemi ve tüm sektörler mobil uygulamada. Web
                demosu sadece bir tadımlık — gerçek yolculuk burada.
              </p>
            </div>
          </div>
          <AppStoreButtons />
        </div>
      </div>
    </section>
  );
}
