import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill, Badge } from "@/components/ui/Card";

const freeFeatures = [
  "7 sektöre özel içerik",
  "8 öğrenme formatı",
  "Seri, XP ve panda sistemi",
  "Sınırsız deneme",
];

const premiumFeatures = [
  "İlerleme takibi & istatistikler",
  "Tamamlama sertifikası",
  "Sınav hazırlık modülleri (TOEFL, IELTS, YDS)",
  "Kişiselleştirilmiş tekrar planı",
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <Pill className="mb-4">Fiyatlandırma</Pill>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Şu an her şey ücretsiz
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-secondary">
          Premium özellikler yolda. Bugün başlayanlar tüm temel içeriğe sınırsız
          erişiyor.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {/* Ücretsiz */}
        <div className="flex flex-col rounded-3xl border-2 border-ink bg-surface p-7 shadow-card">
          <h3 className="text-lg font-bold text-ink">Ücretsiz</h3>
          <p className="mt-1 text-3xl font-extrabold text-ink">
            ₺0<span className="text-base font-medium text-muted"> / sonsuza dek</span>
          </p>
          <ul className="mt-5 flex-1 space-y-2.5">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                <Check size={16} className="shrink-0 text-success" /> {f}
              </li>
            ))}
          </ul>
          <Button href="/demo" size="lg" className="mt-6 w-full">
            Hemen Başla
          </Button>
        </div>

        {/* Premium */}
        <div className="flex flex-col rounded-3xl border border-border bg-background/60 p-7 opacity-80">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-muted">Premium</h3>
            <Badge>Çok Yakında</Badge>
          </div>
          <p className="mt-1 text-3xl font-extrabold text-muted">
            ₺—<span className="text-base font-medium text-muted"> / ay</span>
          </p>
          <ul className="mt-5 flex-1 space-y-2.5">
            {premiumFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted">
                <Check size={16} className="shrink-0 text-muted" /> {f}
              </li>
            ))}
          </ul>
          <Button variant="disabled" size="lg" className="mt-6 w-full">
            Yakında
          </Button>
        </div>
      </div>
    </section>
  );
}
