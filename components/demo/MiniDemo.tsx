"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  vocabBySector,
  type Sector,
} from "@/content/demo-content";
import { SectorPicker } from "./SectorPicker";
import { Flashcard } from "./Flashcard";
import { Button } from "@/components/ui/Button";
import { Panda } from "@/components/mascot/Panda";

type Phase = "pick" | "cards" | "done";

export function MiniDemo() {
  const [phase, setPhase] = useState<Phase>("pick");
  const [sector, setSector] = useState<Sector | null>(null);
  const [index, setIndex] = useState(0);

  const cards = sector ? vocabBySector[sector.id] ?? [] : [];
  const progress = cards.length ? ((index + 1) / cards.length) * 100 : 0;

  function pick(s: Sector) {
    setSector(s);
    setIndex(0);
    setPhase("cards");
  }

  function next() {
    if (index < cards.length - 1) setIndex((i) => i + 1);
    else setPhase("done");
  }

  function restart() {
    setPhase("pick");
    setSector(null);
    setIndex(0);
  }

  return (
    <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-card sm:p-7">
      <AnimatePresence mode="wait">
        {phase === "pick" && (
          <motion.div
            key="pick"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-accent-deep">
              1. Adım
            </p>
            <h3 className="mb-4 text-xl font-bold text-ink">
              Sektörünü seç, hemen dene
            </h3>
            <SectorPicker onPick={pick} />
          </motion.div>
        )}

        {phase === "cards" && sector && (
          <motion.div
            key="cards"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="text-lg">{sector.emoji}</span>
                {sector.name}
              </span>
              <span className="text-xs font-medium text-muted">
                {index + 1} / {cards.length}
              </span>
            </div>
            <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-ink/5">
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>

            <Flashcard card={cards[index]} />

            <div className="mt-5 flex justify-end">
              <Button size="lg" onClick={next}>
                {index < cards.length - 1 ? "Sıradaki kart" : "Bitir"}
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        )}

        {phase === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-4 text-center"
          >
            <Panda size={96} accessory="✨" />
            <h3 className="mt-4 text-xl font-bold text-ink">
              Tebrikler, ilk modülünü bitirdin! 🎉
            </h3>
            <p className="mt-2 max-w-sm text-sm text-secondary">
              Bu sadece bir kelime kartı moduydu. Gerçek uygulamada{" "}
              <strong className="text-ink">8 farklı öğrenme formatı</strong> ve{" "}
              <strong className="text-ink">7 sektör</strong> seni bekliyor —
              mülakat, toplantı, e-posta ve daha fazlası.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/demo" size="lg">
                Tam demoyu dene <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" onClick={restart}>
                Başka sektör seç
              </Button>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-success">
              <Check size={14} /> Üyelik gerekmedi, hiç kayıt olmadın
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
