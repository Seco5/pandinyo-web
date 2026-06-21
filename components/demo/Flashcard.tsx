"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import type { VocabCard } from "@/content/demo-content";

export function Flashcard({ card }: { card: VocabCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="block w-full text-left [perspective:1200px]"
      aria-label="Kartı çevir"
    >
      <div className={`flip-3d relative h-64 w-full ${flipped ? "is-flipped" : ""}`}>
        {/* Ön yüz — İngilizce */}
        <div className="flip-face absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border bg-surface shadow-card p-6">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            İngilizce
          </span>
          <span className="text-center text-3xl font-bold text-ink">
            {card.english}
          </span>
          <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <RotateCw size={14} /> Anlamı için dokun
          </span>
        </div>

        {/* Arka yüz — Türkçe + örnek */}
        <div className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-accent bg-accent/15 p-6">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-deep">
            Türkçe
          </span>
          <span className="text-center text-2xl font-bold text-ink">
            {card.turkish}
          </span>
          <p className="mt-4 text-center text-sm italic text-secondary">
            “{card.example}”
          </p>
        </div>
      </div>

      <motion.div
        key={card.english}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="sr-only"
      >
        {card.english}
      </motion.div>
    </button>
  );
}
