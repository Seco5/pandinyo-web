import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

// Display — "resmi memorandum" hissi veren karakterli serif
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

// Veri/istatistik — XP, seri günü, dosya numarası hissi
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-data",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pandinyo.com"),
  title: {
    default: "Pandinyo — İş İngilizcesini sektörüne göre öğren",
    template: "%s · Pandinyo",
  },
  description:
    "Pandinyo ile iş İngilizcesini gerçek hayat senaryolarıyla öğren. Sektörüne özel kelimeler, mülakat, toplantı ve e-posta pratiği. Üyelik gerekmez — tarayıcıda hemen dene.",
  keywords: [
    "iş ingilizcesi öğren",
    "online ingilizce",
    "business english türkçe",
    "ingilizce mülakat",
    "sektörel ingilizce",
    "ingilizce e-posta yazma",
  ],
  openGraph: {
    title: "Pandinyo — İş İngilizcesini sektörüne göre öğren",
    description:
      "Üyeliksiz, tarayıcıda hemen denenebilen iş İngilizcesi pratiği. Panda seninle birlikte gelişiyor.",
    type: "website",
    locale: "tr_TR",
    siteName: "Pandinyo",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandinyo — İş İngilizcesini sektörüne göre öğren",
    description: "Üyeliksiz, tarayıcıda hemen denenebilen iş İngilizcesi pratiği.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${fraunces.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
