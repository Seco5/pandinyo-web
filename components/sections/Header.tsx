import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, #FFE7A6 0%, #FFC83D 70%, #FF9F1C 100%)",
            }}
          >
            🐼
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Pandinyo
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-secondary md:flex">
          <a href="/#modules" className="hover:text-ink">Modüller</a>
          <a href="/#streak" className="hover:text-ink">Seri Sistemi</a>
          <a href="/#story" className="hover:text-ink">Story Mode</a>
          <Link href="/pricing" className="hover:text-ink">Fiyatlandırma</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/login" variant="ghost" size="md" className="hidden sm:inline-flex opacity-60">
            Giriş Yap
          </Button>
          <Button href="/demo" size="md">
            Ücretsiz Dene
          </Button>
        </div>
      </div>
    </header>
  );
}
