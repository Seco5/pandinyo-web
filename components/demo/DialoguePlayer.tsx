"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dialogue } from "@/content/demo-content";
import { Button } from "@/components/ui/Button";

export function DialoguePlayer({
  dialogue,
  onDone,
}: {
  dialogue: Dialogue;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState(1);
  const [reveal, setReveal] = useState(false);
  const total = dialogue.turns.length;
  const visible = dialogue.turns.slice(0, shown);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 min-h-[18rem]">
        <AnimatePresence initial={false}>
          {visible.map((turn, i) => {
            const isUser = turn.speaker === "user";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    isUser
                      ? "bg-accent text-ink rounded-br-sm"
                      : "bg-ink/5 text-secondary rounded-bl-sm"
                  }`}
                >
                  <p className="font-medium">{turn.text}</p>
                  {reveal && (
                    <p className="mt-1 text-xs opacity-70">{turn.tr}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button variant="ghost" size="md" onClick={() => setReveal((r) => !r)}>
          {reveal ? "Çeviriyi gizle" : "Türkçesini göster"}
        </Button>
        {shown < total ? (
          <Button size="md" onClick={() => setShown((s) => s + 1)}>
            Sıradaki replik →
          </Button>
        ) : (
          <Button size="md" onClick={onDone}>
            Tamamla ✓
          </Button>
        )}
      </div>
    </div>
  );
}
