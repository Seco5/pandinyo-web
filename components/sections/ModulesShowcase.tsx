import { modules } from "@/content/demo-content";
import { Pill } from "@/components/ui/Card";

export function ModulesShowcase() {
  return (
    <section id="modules" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <Pill className="mb-4">8 Modül</Pill>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Tek bir formatla değil, işin gerçeğiyle öğren
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-secondary">
          Her modül farklı bir beceriye odaklanır. Kelimeden sunuma, mülakattan
          ücret görüşmesine kadar iş hayatının dilini baştan sona kapsar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <div
            key={m.name}
            className="group rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-2xl">
              {m.emoji}
            </div>
            <h3 className="font-bold text-ink">{m.name}</h3>
            <p className="mt-1 text-sm text-secondary">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
