import Image from "next/image";
import {
  IconFolder,
  IconDeviceMobile,
  IconTarget,
  IconChartBar,
  IconTrophy,
  IconCrown,
  IconArrowRight,
  IconBriefcase,
  IconUsers,
  IconBuilding,
  IconLock,
  IconQuote,
  IconStarFilled,
  IconShieldCheck,
  IconCalendar,
  IconUser,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  { Icon: IconTarget, title: "Gerçek Senaryolar", sub: "300+ iş senaryosu" },
  { Icon: IconChartBar, title: "Kariyer İlerlemesi", sub: "5 kademe, sürekli gelişim" },
  { Icon: IconTrophy, title: "Sertifikalı Başarı", sub: "Her kademede yeni rozet" },
];

const ranks = [
  { n: "01", role: "Intern", Icon: IconBriefcase, note: "İlk gün, ilk izlenim", open: true },
  { n: "02", role: "Junior Analyst", Icon: IconChartBar, note: "İlk sorumluluklar", open: true },
  { n: "03", role: "Manager", Icon: IconUsers, note: "Ekibini yönet", open: false },
  { n: "04", role: "Director", Icon: IconBuilding, note: "Kurula hesap ver", open: false },
  { n: "05", role: "CEO", Icon: IconCrown, note: "Zirve", open: false, active: true },
];

const cards = [
  { code: "DOSYA-A", title: "İlk Adım", range: "INTERN → JUNIOR", Icon: IconBriefcase, open: true },
  { code: "DOSYA-B", title: "Yöneticilik Yolu", range: "JUNIOR → MANAGER", Icon: IconLock, open: false },
  { code: "DOSYA-C", title: "Zirveye Son Adım", range: "MANAGER → CEO", Icon: IconLock, open: false },
];

const trust = [
  { Icon: IconStarFilled, label: "Pandinyo ile 3 ayda ortalama %47 hızlı ilerleme" },
  { Icon: IconShieldCheck, label: "7/24 erişim" },
  { Icon: IconCalendar, label: "Dilediğin yerde, dilediğin zaman" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
      {children}
    </span>
  );
}

export function StoryMode() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#0d0d0d] py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── ÜST: künye + hedef kartı ── */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2">
              <IconFolder size={18} className="text-accent" />
              <Eyebrow>Kariyer Dosyası</Eyebrow>
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              Stajyerlikten CEO&apos;ya,
              <br />
              kararlarınla <span className="text-accent">yüksel.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/65">
              Pandinyo&apos;da kelime ezberlemezsin — bir kariyer yürürsün. Her
              bölümde gerçek bir iş senaryosunda İngilizce karar verirsin;
              başarınca bir sonraki kademe açılır.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-accent">
                    <h.Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{h.title}</p>
                    <p className="text-xs text-white/50">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* hedef kartı + panda */}
          <div className="relative min-h-[260px]">
            <span className="absolute right-0 top-0 z-20 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              <IconDeviceMobile size={15} /> Sadece mobil uygulamada
            </span>

            {/* panda + altın hale */}
            <div className="absolute left-0 top-10 z-0 h-[230px] w-[58%]">
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-3xl" />
              <Image
                src="/pandinyobusiness.png"
                alt="Takım elbiseli Pandinyo"
                width={900}
                height={720}
                className="relative h-full w-full rounded-2xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-[#0d0d0d]/70" />
            </div>

            {/* HEDEFİN kartı */}
            <div className="relative z-10 ml-auto mt-16 w-[62%] rounded-2xl border border-white/12 bg-black/55 p-5 backdrop-blur">
              <IconCrown size={22} className="text-accent" />
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Hedefin
              </p>
              <p className="text-2xl font-extrabold">Global Manager</p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/12">
                <div className="h-full w-[72%] rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-sm text-white/55">4. kademe</p>
              <Button href="/demo" size="md" className="mt-4 w-full">
                Yol Haritamı Gör <IconArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* ── ORTA: kademeler + hikâye kartları ── */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* kariyer kademeleri */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
              Kariyer Kademeleri
            </p>
            <ol className="relative space-y-3 pl-6">
              <span className="pointer-events-none absolute bottom-5 left-[3px] top-5 w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0" />
              {ranks.map((r) => (
                <li key={r.n} className="relative">
                  <span
                    className={`absolute -left-[26px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${
                      r.active ? "bg-accent ring-4 ring-accent/20" : "bg-white/25"
                    }`}
                  />
                  <div
                    className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 ${
                      r.active
                        ? "border-accent/70 bg-accent/[0.06]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        r.open || r.active
                          ? "bg-accent/15 text-accent"
                          : "bg-white/[0.06] text-white/45"
                      }`}
                    >
                      <r.Icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-white/40">
                        {r.n}
                      </p>
                      <p className="text-lg font-bold leading-tight">{r.role}</p>
                    </div>
                    <span className="hidden text-sm text-white/45 sm:block">
                      {r.note}
                    </span>
                    {r.open ? (
                      <span className="shrink-0 rounded-md bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-400">
                        Açık
                      </span>
                    ) : (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-white/35">
                        <IconLock size={15} />
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* hikâye kartları */}
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
              Hikâye Kartları
              <span className="font-medium tracking-[0.1em] text-white/30">
                · her biri 10 bölüm
              </span>
            </p>
            <div className="space-y-3">
              {cards.map((c) => (
                <div
                  key={c.code}
                  className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 ${
                    c.open
                      ? "border-accent/70 bg-accent/[0.06]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      c.open ? "bg-accent/15 text-accent" : "bg-white/[0.06] text-white/40"
                    }`}
                  >
                    <c.Icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-white/40">
                      {c.code}
                    </p>
                    <p className="text-lg font-bold leading-tight">{c.title}</p>
                    <p className="text-[11px] font-medium tracking-[0.08em] text-white/45">
                      {c.range}
                    </p>
                  </div>
                  {c.open ? (
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                      Devam Et <IconArrowRight size={15} />
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/40">
                      Kilitli <IconLock size={14} />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* yükselen yıldız notu */}
            <div className="mt-3 flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/[0.07] p-4">
              <IconQuote size={26} className="shrink-0 text-accent/70" />
              <p className="flex-1 text-sm leading-relaxed text-white/75">
                Bir dosyayı{" "}
                <span className="font-semibold text-white">
                  yükselen yıldız (
                  <IconStarFilled size={12} className="inline text-accent" />
                  <IconStarFilled size={12} className="inline text-accent" />
                  <IconStarFilled size={12} className="inline text-accent" />)
                </span>{" "}
                olarak kapatınca bir üst kademenin kilidi açılır. Global Manager
                ve Startup Founder dosyaları seni bekliyor.
              </p>
              <div className="hidden shrink-0 items-center gap-3 sm:flex">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0d0d0d] bg-white/10 text-white/60"
                    >
                      <IconUser size={13} />
                    </span>
                  ))}
                </div>
                <div className="leading-none">
                  <p className="text-sm font-extrabold text-accent">+1.250</p>
                  <p className="text-[10px] text-white/45">kullanıcı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ALT: güven barı + indir ── */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            {trust.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2.5 text-sm text-white/65"
              >
                <t.Icon size={18} className="shrink-0 text-accent" />
                {t.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button href="/demo" size="lg">
              Uygulamayı İndir <IconArrowRight size={18} />
            </Button>
            <div className="hidden rounded-lg bg-white p-1.5 sm:block">
              <Image
                src="/qr.svg"
                alt="Uygulama indirme QR kodu"
                width={56}
                height={56}
                className="h-14 w-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
