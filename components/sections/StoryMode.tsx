import Image from "next/image";
import { Lock } from "lucide-react";
import { WaxSeal } from "@/components/ui/WaxSeal";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";

// Mobil src/data/story.ts — kariyer zinciri ve kademeler
const ranks = [
  { code: "RANK-01", role: "Intern", tr: "Stajyer", note: "İlk gün, ilk izlenim" },
  { code: "RANK-02", role: "Junior Analyst", tr: "Uzman Yardımcısı", note: "İlk sorumluluklar" },
  { code: "RANK-03", role: "Manager", tr: "Müdür", note: "Ekibini yönet" },
  { code: "RANK-04", role: "Director", tr: "Direktör", note: "Kurula hesap ver" },
  { code: "RANK-05", role: "CEO", tr: "Genel Müdür", note: "Zirve", top: true },
];

const cards = [
  { code: "DOSYA-A", title: "İlk Adım", range: "Intern → Junior", status: "AÇIK", open: true },
  { code: "DOSYA-B", title: "Yöneticilik Yolu", range: "Junior → Müdür", status: "★★★ İLE AÇILIR", open: false },
  { code: "DOSYA-C", title: "Zirveye Son Adım", range: "Müdür → CEO", status: "★★★ İLE AÇILIR", open: false },
];

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-label="üç yıldız">
      {[0, 1, 2].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FFC83D">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
        </svg>
      ))}
    </span>
  );
}

export function StoryMode() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-20 text-white">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* başlık bloğu */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div className="max-w-2xl">
            <p className="font-data text-[11px] text-accent">KARİYER DOSYASI</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Stajyerlikten CEO&apos;ya, kararlarınla yüksel.
            </h2>
            <p className="mt-4 text-white/75">
              Pandinyo&apos;da kelime ezberlemezsin — bir kariyer yürürsün. Her
              bölümde gerçek bir iş senaryosunda İngilizce karar verirsin;
              başarınca bir sonraki kademe açılır.
            </p>
          </div>
          {/* SADECE MOBİL — düz tipografik etiket */}
          <span className="border border-white/30 px-4 py-1.5 font-data text-[11px] text-white/70">
            Sadece mobil uygulamada
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          {/* SOL — terfi yolu (imza unsuru) */}
          <ol className="relative space-y-3">
            {/* altın iplik */}
            <span className="pointer-events-none absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-accent/0 via-accent/45 to-accent/0" />
            {ranks.map((r) => (
              <li
                key={r.code}
                className={`paper-texture relative flex items-center gap-4 rounded-md border-l-4 px-4 py-3.5 text-ink shadow-card ${
                  r.top ? "border-accent" : "border-ink/15"
                }`}
              >
                {/* iplik üzerindeki düğüm — mühür değil, sade düğüm */}
                <span className="relative z-10 flex h-3 w-3 shrink-0 items-center justify-center">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      r.top ? "bg-accent ring-4 ring-accent/25" : "bg-ink/25"
                    }`}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-data text-[10px] text-ink/45">{r.code}</p>
                  <p className="font-display text-lg font-medium leading-tight text-ink">
                    {r.role}
                    <span className="ml-2 align-middle font-sans text-xs font-normal text-ink/55">
                      {r.tr}
                    </span>
                  </p>
                </div>
                <span className="hidden font-sans text-xs text-ink/50 sm:block">
                  {r.note}
                </span>
              </li>
            ))}
          </ol>

          {/* SAĞ — hikâye dosyaları + mekanik */}
          <div>
            <p className="font-data text-[11px] text-white/45">
              Hikâye kartları · her biri 10 bölüm
            </p>
            <div className="mt-4 space-y-3">
              {cards.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-4 rounded-md border border-white/12 bg-white/[0.04] px-4 py-3.5"
                >
                  {/* Mühür YALNIZCA açık dosyada; kilitlide sade kilit */}
                  {c.open ? (
                    <WaxSeal size={40} tone="gold" className="shrink-0" />
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/35">
                      <Lock size={16} />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-data text-[10px] text-white/40">{c.code}</p>
                    <p className="font-display text-lg font-medium">{c.title}</p>
                    <p className="font-data text-[10px] text-white/50">{c.range}</p>
                  </div>
                  <span
                    className={`shrink-0 font-data text-[10px] ${
                      c.open ? "text-accent" : "text-white/45"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-md border border-accent/25 bg-accent/[0.06] p-4">
              <span className="mt-0.5">
                <Stars />
              </span>
              <p className="text-sm text-white/75">
                Bir dosyayı{" "}
                <strong className="font-medium text-white">
                  Yükselen Yıldız (★★★)
                </strong>{" "}
                olarak kapatınca bir üst kademenin kilidi açılır. Global Manager
                ve Startup Founder dosyaları seni zirvede bekliyor.
              </p>
            </div>
          </div>
        </div>

        {/* İndirme CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 rounded-lg border border-white/12 bg-white/[0.04] p-7 sm:flex-row sm:justify-between sm:p-9">
          <div className="flex items-center gap-5">
            <Image
              src="/story/panda_hero.png"
              alt="Pandinyo maskotu"
              width={160}
              height={130}
              className="hidden w-28 drop-shadow-xl sm:block"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-medium">
                Dosyanı telefonundan aç
              </h3>
              <p className="mt-1 max-w-md text-sm text-white/75">
                Kariyer dosyası, seri sistemi ve tüm sektörler mobil uygulamada.
                Web demosu sadece bir tadımlık.
              </p>
            </div>
          </div>
          <AppStoreButtons />
        </div>
      </div>
    </section>
  );
}
