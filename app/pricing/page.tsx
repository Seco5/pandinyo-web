import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PricingTeaser } from "@/components/sections/PricingTeaser";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Pandinyo şu an tamamen ücretsiz. Premium özellikler (sertifika, ilerleme takibi, sınav modülleri) çok yakında.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-8">
        <PricingTeaser />
      </div>
      <Footer />
    </main>
  );
}
