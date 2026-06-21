import { streakStages } from "@/content/demo-content";
import { Pill } from "@/components/ui/Card";
import { Panda } from "@/components/mascot/Panda";

export function StreakExplainer() {
  return (
    <section id="streak" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Pill className="mb-4 bg-white/10 text-accent">Seri Sistemi</Pill>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Her gün pratik yap, panda seninle büyüsün
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            GitHub-streak mantığıyla: üst üste çalıştıkça serin uzar, pandan yeni
            kostümler kazanır. Bir gün kaçırırsan üzülür — seni geri çağırır.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {streakStages.map((s) => (
            <div
              key={s.day}
              className="flex flex-col items-center rounded-2xl bg-white/5 p-5 text-center ring-1 ring-white/10"
            >
              <Panda
                size={72}
                accessory={s.accessory}
                bob={false}
                dim={s.day === 0}
              />
              <p className="mt-3 text-2xl font-extrabold text-accent">
                {s.day === 0 ? "0" : `${s.day}`}
                <span className="text-sm font-semibold text-white/50"> gün</span>
              </p>
              <p className="text-sm font-bold">{s.label}</p>
              <p className="mt-0.5 text-xs text-white/50">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
