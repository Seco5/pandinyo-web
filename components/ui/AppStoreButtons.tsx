import { Apple, Play } from "lucide-react";

// Mağaza linkleri henüz hazır değil — placeholder. Yayınlanınca href güncellenecek.
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

export function AppStoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        aria-label="App Store'dan indir"
        className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-2.5 text-ink transition hover:bg-white/90"
      >
        <Apple size={26} />
        <span className="text-left leading-none">
          <span className="block text-[10px] font-medium text-ink/60">İndir</span>
          <span className="block text-sm font-bold">App Store</span>
        </span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        aria-label="Google Play'den indir"
        className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-2.5 text-ink transition hover:bg-white/90"
      >
        <Play size={24} className="fill-ink" />
        <span className="text-left leading-none">
          <span className="block text-[10px] font-medium text-ink/60">İndir</span>
          <span className="block text-sm font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
