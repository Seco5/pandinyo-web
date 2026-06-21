"use client";

import { motion } from "framer-motion";
import { sectors, type Sector } from "@/content/demo-content";

export function SectorPicker({
  onPick,
  active,
}: {
  onPick: (s: Sector) => void;
  active?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {sectors.map((s) => (
        <motion.button
          key={s.id}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onPick(s)}
          className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-colors ${
            active === s.id
              ? "border-ink shadow-card"
              : "border-border hover:border-ink/30"
          }`}
          style={{ background: s.tint }}
        >
          <span className="text-3xl">{s.emoji}</span>
          <span className="text-sm font-bold leading-tight text-ink">
            {s.name}
          </span>
          <span className="text-xs font-medium text-secondary/70">{s.sub}</span>
        </motion.button>
      ))}
    </div>
  );
}
