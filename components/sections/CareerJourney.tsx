import { Pill } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Panda } from "@/components/mascot/Panda";

const steps = [
  { emoji: "👋", title: "Kendini tanıt", desc: "İlk izlenim: kim olduğunu ve ne yaptığını net anlat." },
  { emoji: "📞", title: "Telefonu yönet", desc: "Müşteri ve ekip görüşmelerini akıcı şekilde sürdür." },
  { emoji: "💼", title: "Mülakatı geç", desc: "Zor sorulara model cevaplarla hazırlan." },
  { emoji: "🗣️", title: "Toplantıyı yönet", desc: "Fikrini söyle, karşı çık, uzlaş — hepsi İngilizce." },
  { emoji: "💰", title: "Zam iste", desc: "Ücret görüşmesinde stratejini seç, kazanan ol." },
  { emoji: "🎓", title: "Terfi et", desc: "Artık masadaki en güçlü iletişimcisin." },
];

export function CareerJourney() {
  return (
    <section id="career" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Pill className="mb-4">Kariyer Yolculuğu</Pill>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Bir başlangıçtan yönetici masasına
          </h2>
          <p className="mt-3 max-w-md text-secondary">
            Pandinyo&apos;nun hikâye modunda her ders bir kariyer basamağı. Gerçek
            iş senaryolarını sırayla aşarken İngilizcen de seninle birlikte
            terfi alır. Takım elbiseli Pandinyo bu yolculukta yanında.
          </p>
          <div className="mt-6">
            <Button href="/demo" size="lg">
              Yolculuğa başla
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-6 hidden sm:block">
            <Panda size={96} suit accessory="💼" />
          </div>
          <ol className="relative space-y-4 border-l-2 border-dashed border-accent/50 pl-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-ink">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
                  <p className="flex items-center gap-2 font-bold text-ink">
                    <span className="text-lg">{s.emoji}</span> {s.title}
                  </p>
                  <p className="mt-0.5 text-sm text-secondary">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
