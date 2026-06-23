import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-muted">Son güncelleme: {updated}</p>
        )}
        {intro && <p className="mt-5 text-lg text-secondary">{intro}</p>}
        <div className="legal mt-8">{children}</div>
      </section>
      <Footer />
    </main>
  );
}
