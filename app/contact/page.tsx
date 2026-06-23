import type { Metadata } from "next";
import { IconMail, IconWorld, IconClock } from "@tabler/icons-react";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Pandinyo ile iletişime geçin — soru, öneri ve destek talepleri.",
};

const items = [
  {
    Icon: IconMail,
    title: "E-posta",
    value: "ozcilingirsercan@gmail.com",
    href: "mailto:ozcilingirsercan@gmail.com",
  },
  {
    Icon: IconWorld,
    title: "Web",
    value: "pandinyo-web.vercel.app",
    href: "https://pandinyo-web.vercel.app",
  },
  {
    Icon: IconClock,
    title: "Yanıt süresi",
    value: "Genellikle 1–2 iş günü",
  },
];

export default function ContactPage() {
  return (
    <LegalPage
      title="İletişim"
      intro="Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşın. Her mesajı dikkatle okuyoruz."
    >
      <div className="not-prose grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-soft"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
              <it.Icon size={22} />
            </span>
            <p className="mt-3 text-sm font-bold text-ink">{it.title}</p>
            {it.href ? (
              <a
                href={it.href}
                className="mt-1 block break-words text-sm font-medium text-accent-deep underline"
              >
                {it.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-secondary">{it.value}</p>
            )}
          </div>
        ))}
      </div>

      <h2>Geri bildirim</h2>
      <p>
        Pandinyo&apos;yu daha iyi hale getirmek için görüşlerinize ihtiyacımız
        var. Bir hata mı buldunuz, yeni bir sektör mü istiyorsunuz, yoksa bir
        içerik önerisi mi var? E-posta ile bize yazın:{" "}
        <a href="mailto:ozcilingirsercan@gmail.com">ozcilingirsercan@gmail.com</a>
      </p>

      <h2>Basın & iş birlikleri</h2>
      <p>
        İş birliği, kurumsal kullanım veya basın talepleri için de aynı e-posta
        adresinden ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
