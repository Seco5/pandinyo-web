import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Card";
import { Panda } from "@/components/mascot/Panda";

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

        <div className="relative flex items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col items-center gap-5">
            <Panda size={200} accessory="🔥" />
            <div className="flex gap-3">
              <div className="rounded-2xl bg-ink px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-accent">7</p>
                <p className="text-[11px] font-medium text-white/70">günlük seri</p>
              </div>
              <div className="rounded-2xl bg-ink px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-accent">1.240</p>
                <p className="text-[11px] font-medium text-white/70">XP</p>
              </div>
              <div className="rounded-2xl bg-ink px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-accent">💎 18</p>
                <p className="text-[11px] font-medium text-white/70">elmas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
