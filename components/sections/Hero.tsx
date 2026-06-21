import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Card";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
        <div>
          <Pill className="mb-5">🚀 Üyeliksiz · Tarayıcıda hemen başla</Pill>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            İş İngilizcesini{" "}
            <span className="relative inline-block">
              <span className="relative z-10">sektörünün diliyle</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/60" />
            </span>{" "}
            öğren.
          </h1>
          <p className="mt-5 max-w-md text-lg text-secondary">
            Mülakat, toplantı, e-posta ve telefon görüşmesi gibi gerçek iş
            senaryolarıyla pratik yap. Kayıt yok, indirme yok — şu an, burada
            dene.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/demo" size="lg">
              Hemen Dene <ArrowRight size={18} />
            </Button>
            <Button href="/#mini-demo" variant="outline" size="lg">
              Mini demoyu gör
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-secondary">
            {["7 sektöre özel içerik", "8 öğrenme formatı", "Seri & XP sistemi"].map(
              (t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check size={16} className="text-success" /> {t}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative">
          {/* sıcak ışıma — görselin gece/altın tonuyla uyumlu */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-card animate-float">
            <Image
              src="/story/global-manager-hero.webp"
              alt="Takım elbiseli Pandinyo, Londra manzaralı ofisinde dizüstü bilgisayar başında"
              width={1440}
              height={500}
              priority
              className="h-auto w-full"
            />

            {/* alt karartma — istatistik çiplerinin okunması için */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

            {/* sol üst: rol etiketi */}
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-accent backdrop-blur">
              👔 Global Manager
            </span>

            {/* alt: gamification istatistikleri görselin üzerinde */}
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5">
              {[
                { v: "7", l: "günlük seri" },
                { v: "1.240", l: "XP" },
                { v: "💎 18", l: "elmas" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex-1 rounded-2xl bg-ink/70 px-3 py-2 text-center backdrop-blur"
                >
                  <p className="text-lg font-extrabold leading-tight text-accent">{s.v}</p>
                  <p className="text-[10px] font-medium text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
