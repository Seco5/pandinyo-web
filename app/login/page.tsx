import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Panda } from "@/components/mascot/Panda";

export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "Pandinyo hesap girişi çok yakında.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 text-center shadow-card">
          <div className="flex justify-center">
            <Panda size={96} accessory="💤" dim />
          </div>
          <h1 className="mt-5 text-2xl font-extrabold text-ink">Giriş çok yakında</h1>
          <p className="mt-2 text-sm text-secondary">
            Hesap, ilerleme takibi ve senkronizasyon şu an geliştiriliyor. O
            zamana kadar her şeyi üyeliksiz deneyebilirsin.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Button href="/demo" size="lg" className="w-full">
              Üyeliksiz denemeye başla
            </Button>
            <Button href="/" variant="ghost" size="md" className="w-full">
              Ana sayfaya dön
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
