"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  vocabBySector,
  dialogueBySector,
  type Sector,
} from "@/content/demo-content";
import { SectorPicker } from "./SectorPicker";
import { Flashcard } from "./Flashcard";
import { DialoguePlayer } from "./DialoguePlayer";
import { Button } from "@/components/ui/Button";
import { Panda } from "@/components/mascot/Panda";

type Step = "sector" | "mode" | "vocab" | "dialogue" | "done";

const STEP_ORDER: Step[] = ["sector", "mode", "vocab", "dialogue", "done"];

export function DemoFlow() {
  const [step, setStep] = useState<Step>("sector");
  const [sector, setSector] = useState<Sector | null>(null);
  const [cardIndex, setCardIndex] = useState(0);

  const cards = sector ? vocabBySector[sector.id] ?? [] : [];
  const dialogue = sector ? dialogueBySector[sector.id] : null;
  const stepNum = STEP_ORDER.indexOf(step);
  const overall = (stepNum / (STEP_ORDER.length - 1)) * 100;

  function reset() {
    setStep("sector");
    setSector(null);
    setCardIndex(0);
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Genel ilerleme */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs font-medium text-muted">
          <span>Deneme dersi</span>
          <span>{Math.round(overall)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-ink/5">
          <motion.div
            className="h-full rounded-full bg-accent"
            animate={{ width: `${overall}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
        <AnimatePresence mode="wait">
          {step === "sector" && (
            <motion.div key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h2 className="mb-1 text-xl font-bold text-ink">Sektörünü seç</h2>
              <p className="mb-5 text-sm text-secondary">
                İçerik seçtiğin sektöre göre kişiselleşir.
              </p>
              <SectorPicker active={sector?.id} onPick={(s) => { setSector(s); setStep("mode"); }} />
            </motion.div>
          )}

          {step === "mode" && sector && (
            <motion.div key="m" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <h2 className="mb-1 text-xl font-bold text-ink">Hangi mod?</h2>
              <p className="mb-5 text-sm text-secondary">
                Pandinyo iki modla gelir. Demoda İş Hayatı modunu deneyeceğiz.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => setStep("vocab")}
                  className="rounded-2xl border-2 border-ink bg-surface p-5 text-left shadow-soft transition hover:shadow-card"
                >
                  <span className="text-2xl">💼</span>
                  <p className="mt-2 font-bold text-ink">İş Hayatı</p>
                  <p className="text-sm text-secondary">Sektörel iş İngilizcesi</p>
                </button>
                <div className="rounded-2xl border border-border bg-background/60 p-5 text-left opacity-70">
                  <span className="text-2xl">🎓</span>
                  <p className="mt-2 font-bold text-muted">Eğitim / Sınav</p>
                  <p className="text-sm text-muted">TOEFL · IELTS · YDS — yakında</p>
                </div>
              </div>
            </motion.div>
          )}

          {step === "vocab" && sector && (
            <motion.div key="v" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-ink">📚 Kelime kartları</h2>
                <span className="text-xs font-medium text-muted">{cardIndex + 1} / {cards.length}</span>
              </div>
              <Flashcard card={cards[cardIndex]} />
              <div className="mt-5 flex justify-end">
                <Button size="lg" onClick={() => {
                  if (cardIndex < cards.length - 1) setCardIndex((i) => i + 1);
                  else setStep("dialogue");
                }}>
                  {cardIndex < cards.length - 1 ? "Sıradaki kart" : "Diyaloğa geç"}
                  <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "dialogue" && dialogue && (
            <motion.div key="d" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <h2 className="mb-1 text-lg font-bold text-ink">💬 {dialogue.title}</h2>
              <p className="mb-4 text-sm text-secondary">
                Repliği oku, çeviriyi kontrol et, akışı tamamla.
              </p>
              <DialoguePlayer dialogue={dialogue} onDone={() => setStep("done")} />
            </motion.div>
          )}

          {step === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-4 text-center">
              <Panda size={110} accessory="🥇" />
              <h2 className="mt-4 text-2xl font-extrabold text-ink">Deneme dersi tamam! 🎉</h2>
              <p className="mt-2 max-w-md text-sm text-secondary">
                Bir kelime modülünü ve bir diyaloğu bitirdin. Gerçek uygulamada
                bunun gibi 8 format, 7 sektör, seri sistemi ve kariyer hikâye
                modu seni bekliyor.
              </p>
              <div className="mt-5 flex flex-col items-center gap-2 rounded-2xl bg-ink/5 px-6 py-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-success">
                  <Check size={16} /> +50 XP kazandın (demo)
                </span>
                <span className="text-xs text-muted">Mobil uygulamada bu ilerleme kaydedilir.</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" onClick={reset}>Başka sektör dene</Button>
                <Button href="/pricing" variant="outline" size="lg">Planları gör</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
