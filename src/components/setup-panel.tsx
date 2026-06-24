import React from "react";
import { TACTICS } from "../lib/draft-data";

interface SetupPanelProps {
  formation: string;
  setFormation: (v: string) => void;
  style: string;
  setStyle: (v: string) => void;
  difficulty: string;
  setDifficulty: (v: string) => void;
  onStartDraft: () => void;
}

export function SetupPanel({
  formation,
  setFormation,
  style,
  setStyle,
  difficulty,
  setDifficulty,
  onStartDraft,
}: SetupPanelProps) {
  return (
    <div className="w-full p-6 bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626]">
      <h2 className="font-serif text-3xl uppercase mb-6 text-[#262626] border-b-2 border-[#262626]/10 pb-4">
        A <span className="text-[#BF1A1A] italic">Prancheta</span>
      </h2>

      <div className="space-y-6 mb-8">
        <div>
          <label className="font-bold tracking-widest uppercase text-[10px] mb-2 block text-[#262626]/60">
            Formação Tática
          </label>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(TACTICS).map((f) => (
              <button
                key={f}
                onClick={() => setFormation(f)}
                className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${formation === f ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]" : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold tracking-widest uppercase text-[10px] mb-2 block text-[#262626]/60">
            Estilo de Jogo
          </label>
          <div className="flex gap-2 flex-wrap">
            {["Retranca", "Equilibrado", "Ofensivo"].map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${style === s ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]" : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold tracking-widest uppercase text-[10px] mb-2 block text-[#262626]/60">
            Dificuldade
          </label>
          <div className="flex gap-2 flex-wrap">
            {["Normal", "Lenda"].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${difficulty === d ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]" : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onStartDraft}
        className="w-full bg-[#BF1A1A] text-[#FFFAF3] px-6 py-3 uppercase font-black tracking-widest text-sm border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all"
      >
        Sortear Time
      </button>
    </div>
  );
}
