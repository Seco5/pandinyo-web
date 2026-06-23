import Link from "next/link";
import { AtSign, Globe, Mail } from "lucide-react";
import { CONTACT_MAILTO } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, #FFE7A6 0%, #FFC83D 70%, #FF9F1C 100%)",
                }}
              >
                🐼
              </span>
              <span className="text-base font-extrabold text-ink">Pandinyo</span>
            </div>
            <p className="mt-3 text-sm text-secondary">
              İş İngilizcesini sektörüne göre, panda maskotuyla ve seri
              sistemiyle öğreten dil uygulaması.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
                Ürün
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/demo" className="hover:text-ink">Demo</Link></li>
                <li><Link href="/pricing" className="hover:text-ink">Fiyatlandırma</Link></li>
                <li><a href="/#modules" className="hover:text-ink">Modüller</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
                Yasal
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/privacy" className="hover:text-ink">Gizlilik Politikası</Link></li>
                <li><Link href="/terms" className="hover:text-ink">Kullanım Koşulları</Link></li>
                <li><Link href="/support" className="hover:text-ink">Destek</Link></li>
                <li><Link href="/contact" className="hover:text-ink">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
                Takip et
              </p>
              <div className="flex gap-3 text-secondary">
                <a href="#" aria-label="Instagram" className="hover:text-ink"><AtSign size={20} /></a>
                <a href={CONTACT_MAILTO} aria-label="E-posta" className="hover:text-ink"><Mail size={20} /></a>
                <a href="#" aria-label="Web" className="hover:text-ink"><Globe size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © 2026 Pandinyo. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
