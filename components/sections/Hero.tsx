import Image from "next/image";
import {
  IconRocket,
  IconArrowRight,
  IconPlayerPlay,
  IconShieldCheck,
  IconBolt,
  IconCircleCheck,
  IconStar,
  IconStarFilled,
  IconBuilding,
  IconFileText,
  IconTrophy,
  IconMedal,
  IconWorld,
  IconUser,
  IconArrowDown,
  IconFlame,
  IconDiamond,
  IconMail,
  IconMicrophone,
  IconPhone,
  IconBriefcase,
  IconTruck,
  IconCode,
  IconUsers,
  IconChartBar,
  IconSpeakerphone,
  IconCurrencyLira,
  IconBuildingBank,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

const features = [
  { Icon: IconShieldCheck, label: "Üyeliksiz başla" },
  { Icon: IconBolt, label: "Kurulum yok" },
  { Icon: IconCircleCheck, label: "Hemen öğren" },
];

const stats = [
  { Icon: IconStar, value: "1000+", label: "Mutlu Kullanıcı" },
  { Icon: IconBuilding, value: "7+", label: "Sektör" },
  { Icon: IconFileText, value: "300+", label: "Gerçek Senaryo" },
  { Icon: IconTrophy, value: "7 Gün", label: "Seri Yap" },
];

const careerSteps = [
  { role: "Junior Employee", stars: 1, active: false },
  { role: "Team Lead", stars: 2, active: false },
  { role: "Manager", stars: 2, active: false },
  { role: "Global Manager", stars: 3, active: true },
];

const challenges = [
  { Icon: IconMail, title: "E-mail" },
  { Icon: IconMicrophone, title: "Meeting" },
  { Icon: IconPhone, title: "Phone Call" },
  { Icon: IconBriefcase, title: "Interview" },
];

const sectors = [
  { Icon: IconTruck, label: "Lojistik" },
  { Icon: IconCode, label: "Yazılım" },
  { Icon: IconUsers, label: "İnsan Kaynakları" },
  { Icon: IconChartBar, label: "Satış" },
  { Icon: IconSpeakerphone, label: "Pazarlama" },
  { Icon: IconCurrencyLira, label: "Finans" },
  { Icon: IconBuildingBank, label: "Yönetim" },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <IconStarFilled key={i} size={11} className="text-accent" />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
        {/* ── SOL ── */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-secondary shadow-soft">
            <IconRocket size={16} className="text-accent-deep" />
            Üyeliksiz · Tarayıcıda hemen başla
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            İş hayatında
            <br />
            İngilizce konuşan
            <br />
            <span className="relative whitespace-nowrap text-accent">
              versiyonuna
              <span className="absolute inset-x-0 -bottom-1 h-1.5 rounded-full bg-accent/70" />
            </span>{" "}
            <span className="text-ink">dönüş.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-secondary">
            Toplantı yap, e-posta yaz, mülakata gir, müşteriyle konuş. Gerçek
            senaryolarla seviye atla ve kariyerinde ilerle.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/demo" size="lg">
              Ücretsiz Başla <IconArrowRight size={18} />
            </Button>
            <Button href="/#mini-demo" variant="outline" size="lg">
              <IconPlayerPlay size={18} /> 2 Dakikalık Demoyu İzle
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-secondary">
            {features.map((f) => (
              <li key={f.label} className="inline-flex items-center gap-1.5">
                <f.Icon size={18} className="text-accent-deep" />
                {f.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border border-border bg-surface p-5 shadow-soft sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <s.Icon size={22} className="shrink-0 text-accent-deep" />
                <div>
                  <p className="text-lg font-extrabold leading-none text-ink">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SAĞ: koyu mockup kartı ── */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#1a1a1a] p-4 shadow-card sm:p-5">
            {/* arka plan: iş pandası sahnesi */}
            <Image
              src="/pandinyobusiness.png"
              alt="Takım elbiseli Pandinyo iş ortamında"
              width={1200}
              height={960}
              priority
              className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[68%] object-cover object-left opacity-95"
            />
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-transparent" />

            {/* üst: Global Manager + progress */}
            <div className="relative z-10 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-ink">
                <IconMedal size={18} />
              </span>
              <span className="text-sm font-bold text-white">Global Manager</span>
              <IconWorld size={16} className="text-white/60" />
              <div className="ml-auto flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[72%] rounded-full bg-accent" />
                </div>
                <span className="text-xs font-semibold text-white/80">%72</span>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex gap-3">
              {/* kariyer listesi */}
              <div className="w-[52%] space-y-2">
                {careerSteps.map((c, i) => (
                  <div key={c.role}>
                    <div
                      className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${
                        c.active
                          ? "bg-white/10 ring-1 ring-accent"
                          : "bg-white/[0.04]"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          c.active ? "bg-accent text-ink" : "bg-white/10 text-white/70"
                        }`}
                      >
                        <IconUser size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-white">
                          {c.role}
                        </p>
                        <Stars count={c.stars} />
                      </div>
                    </div>
                    {i < careerSteps.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <IconArrowDown size={14} className="text-accent/70" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* sağ üst stat kutucukları */}
              <div className="ml-auto flex flex-col gap-2">
                {[
                  { Icon: IconFlame, v: "7", l: "Gün Seri" },
                  { Icon: IconStarFilled, v: "1.240", l: "XP" },
                  { Icon: IconDiamond, v: "18", l: "Elmas" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex items-center gap-2 rounded-xl bg-black/55 px-3 py-2 backdrop-blur"
                  >
                    <s.Icon size={18} className="text-accent" />
                    <div>
                      <p className="text-sm font-extrabold leading-none text-white">
                        {s.v}
                      </p>
                      <p className="text-[10px] text-white/55">{s.l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* alt challenge kartları */}
            <div className="relative z-10 mt-4 grid grid-cols-4 gap-2">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl bg-white p-2.5 text-center shadow-soft"
                >
                  <c.Icon size={20} className="mx-auto text-ink" />
                  <p className="mt-1.5 text-[11px] font-bold leading-tight text-ink">
                    {c.title}
                  </p>
                  <p className="text-[9px] text-muted">Challenge</p>
                  <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Alt sektör bandı ── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
          <p className="text-center text-sm font-medium text-muted">
            Birçok sektörden profesyonel tarafından tercih ediliyor
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {sectors.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary"
              >
                <s.Icon size={20} className="text-ink/55" />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
