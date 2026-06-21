import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WaxSeal } from "@/components/ui/WaxSeal";

const credentials = [
  { k: "SEKTÖR", v: "07" },
  { k: "MODÜL", v: "08" },
  { k: "MOD", v: "İŞ + EĞİTİM" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden paper-texture">
      {/* üst memorandum kuralı */}
      <div className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <span className="font-data text-[11px] tracking-[0.2em] text-ink/50">
            PANDINYO · İŞ İNGİLİZCESİ KAYIT SİSTEMİ
          </span>
          <span className="font-data text-[11px] tracking-[0.2em] text-ink/50">
            DOSYA NO · PND-2026
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* SOL — dosya künyesi */}
        <div>
          <span className="file-tab inline-block bg-ink px-4 py-1.5 font-data text-[11px] font-semibold tracking-[0.2em] text-accent">
            PERSONEL DOSYASI · AÇIK
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-6xl">
            İş İngilizcesini{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">sektörünün diliyle</span>
              <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 -rotate-1 bg-accent/70" />
            </span>{" "}
            öğren.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-secondary">
            Mülakat, toplantı, ücret görüşmesi, e-posta ve telefon — gerçek iş
            senaryolarında pratik yap. Kayıt yok, indirme yok; dosyanı şimdi aç.
          </p>

          {/* künye satırları — form alanı hissi */}
          <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-y border-ink/10 py-4">
            {credentials.map((c) => (
              <div key={c.k}>
                <dt className="font-data text-[10px] tracking-[0.18em] text-ink/45">
                  {c.k}
                </dt>
                <dd className="font-data text-base font-semibold text-ink">
                  {c.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/demo" size="lg">
              Dosyanı aç <ArrowRight size={18} />
            </Button>
            <Button href="/#mini-demo" variant="outline" size="lg">
              Önce bir göz at
            </Button>
          </div>
        </div>

        {/* SAĞ — kimlik kartı / dosya fotoğrafı + mühür (imza dokunuşu) */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-5 -rotate-2 rounded-sm bg-parchment shadow-soft" />
          <div className="relative -rotate-1">
            {/* ID kart başlığı */}
            <div className="flex items-center justify-between rounded-t-md bg-ink px-4 py-2">
              <span className="font-data text-[10px] tracking-[0.2em] text-accent">
                GÖREV KARTI
              </span>
              <span className="font-data text-[10px] tracking-[0.2em] text-white/55">
                RANK · CEO
              </span>
            </div>

            {/* fotoğraf */}
            <div className="relative overflow-hidden border-x-2 border-ink/85">
              <Image
                src="/story/global-manager-hero.webp"
                alt="Takım elbiseli Pandinyo, Londra manzaralı ofisinde"
                width={1440}
                height={500}
                priority
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute bottom-3 left-4 font-display text-xl font-semibold text-white">
                Pandinyo
                <span className="ml-2 font-data text-xs font-normal tracking-wide text-accent">
                  Global Manager
                </span>
              </p>
            </div>

            {/* kayıt satırları — alt künye */}
            <div className="grid grid-cols-3 divide-x divide-ink/10 rounded-b-md border-2 border-t-0 border-ink/85 bg-paper">
              {[
                { v: "7", l: "SERİ / GÜN" },
                { v: "1.240", l: "XP" },
                { v: "18", l: "ELMAS" },
              ].map((s) => (
                <div key={s.l} className="px-3 py-2.5 text-center">
                  <p className="font-data text-lg font-semibold text-ink">{s.v}</p>
                  <p className="font-data text-[9px] tracking-[0.14em] text-ink/45">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* mühür — kartın köşesine basılı */}
          <div className="absolute -right-3 -top-4 z-10 animate-stamp">
            <WaxSeal label="ONAY" size={78} tone="seal" />
          </div>
        </div>
      </div>
    </section>
  );
}
