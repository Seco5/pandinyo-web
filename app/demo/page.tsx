import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { DemoFlow } from "@/components/demo/DemoFlow";
import { Pill } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Ücretsiz Deneme Dersi",
  description:
    "Pandinyo deneme dersi: sektörünü seç, kelime kartlarını çöz ve gerçek bir iş diyaloğunu dene. Üyelik gerekmez.",
};

export default function DemoPage() {
  return (
    <main>
      <Header />
      <section className="bg-grid py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <Pill className="mb-4">Deneme Dersi</Pill>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Birkaç dakikada Pandinyo&apos;yu deneyimle
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-secondary">
            Sektör seç, modu belirle ve iki modülü art arda dene. Bu bir vitrin —
            ilerleme kaydedilmez, sayfayı yenilersen baştan başlar.
          </p>
        </div>
      </section>
      <section className="px-4 pb-24 sm:px-6">
        <DemoFlow />
      </section>
      <Footer />
    </main>
  );
}
