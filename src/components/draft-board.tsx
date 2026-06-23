"use client";

import React, { useState } from "react";
import { PlayerButton, type FieldSlot, type Player } from "./ui/player-button";
import { FootballCamp } from "./ui/football-camp";

// --- DADOS MOCKADOS PARA TESTE ---
const MOCK_TEAMS = [
  "Santos",
  "Boca Juniors",
  "São Paulo",
  "River Plate",
  "Flamengo",
  "Palmeiras",
];
const MOCK_EDITIONS = ["1992", "2000", "2007", "2011", "2019", "2021"];

const MOCK_POOL: Player[] = [
  { id: "1", name: "Rogério Ceni", shortName: "R. Ceni", position: ["GOL"] },
  { id: "2", name: "Cafu", shortName: "Cafu", position: ["LD", "MD"] },
  { id: "3", name: "Gamarra", shortName: "Gamarra", position: ["ZAG"] },
  {
    id: "4",
    name: "Neymar",
    shortName: "Neymar",
    position: ["PE", "CA", "MEI"],
  },
  { id: "5", name: "Riquelme", shortName: "Riquelme", position: ["MEI"] },
  { id: "6", name: "Gabigol", shortName: "Gabigol", position: ["CA", "PD"] },
];

// Dicionário Dinâmico: Formação + Estilo de Jogo alteram o campo em tempo real!
const TACTICS: Record<string, Record<string, Omit<FieldSlot, "player">[]>> = {
  "4-3-3": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 50, y: 56 },
      { pos: "MC", x: 75, y: 44 },
      { pos: "MC", x: 25, y: 44 },
      { pos: "PD", x: 80, y: 24 },
      { pos: "CA", x: 50, y: 14 },
      { pos: "PE", x: 20, y: 24 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 50, y: 56 },
      { pos: "MC", x: 70, y: 46 },
      { pos: "MEI", x: 30, y: 46 },
      { pos: "PD", x: 80, y: 24 },
      { pos: "CA", x: 50, y: 14 },
      { pos: "PE", x: 20, y: 24 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "CM", x: 50, y: 56 },
      { pos: "CM", x: 75, y: 45 },
      { pos: "MEI", x: 25, y: 40 },
      { pos: "PD", x: 80, y: 24 },
      { pos: "CA", x: 50, y: 14 },
      { pos: "PE", x: 20, y: 24 },
    ],
  },
  "4-4-2": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 82, y: 70 },
      { pos: "ZAG", x: 65, y: 72 },
      { pos: "ZAG", x: 35, y: 72 },
      { pos: "LE", x: 18, y: 70 },
      { pos: "MD", x: 82, y: 45 },
      { pos: "VOL", x: 62, y: 55 },
      { pos: "VOL", x: 38, y: 55 },
      { pos: "ME", x: 18, y: 45 },
      { pos: "CA", x: 60, y: 22 },
      { pos: "CA", x: 40, y: 22 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 82, y: 68 },
      { pos: "ZAG", x: 65, y: 70 },
      { pos: "ZAG", x: 35, y: 70 },
      { pos: "LE", x: 18, y: 68 },
      { pos: "MD", x: 82, y: 38 },
      { pos: "VOL", x: 62, y: 48 },
      { pos: "MC", x: 38, y: 48 },
      { pos: "ME", x: 18, y: 38 },
      { pos: "CA", x: 60, y: 20 },
      { pos: "CA", x: 40, y: 20 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 82, y: 66 },
      { pos: "ZAG", x: 65, y: 68 },
      { pos: "ZAG", x: 35, y: 68 },
      { pos: "LE", x: 18, y: 66 },
      { pos: "VOL", x: 50, y: 56 },
      { pos: "MC", x: 72, y: 46 },
      { pos: "MC", x: 28, y: 46 },
      { pos: "MEI", x: 50, y: 36 },
      { pos: "CA", x: 60, y: 20 },
      { pos: "CA", x: 40, y: 20 },
    ],
  },
  "3-5-2": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "ZAG", x: 75, y: 72 },
      { pos: "ZAG", x: 50, y: 75 },
      { pos: "ZAG", x: 25, y: 72 },
      { pos: "AD", x: 85, y: 48 },
      { pos: "VOL", x: 60, y: 56 },
      { pos: "MC", x: 50, y: 40 },
      { pos: "VOL", x: 40, y: 56 },
      { pos: "AE", x: 15, y: 48 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "ZAG", x: 75, y: 72 },
      { pos: "ZAG", x: 50, y: 75 },
      { pos: "ZAG", x: 25, y: 72 },
      { pos: "AD", x: 85, y: 46 },
      { pos: "MC", x: 65, y: 54 },
      { pos: "MEI", x: 50, y: 38 },
      { pos: "MC", x: 35, y: 54 },
      { pos: "AE", x: 15, y: 46 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "ZAG", x: 75, y: 72 },
      { pos: "ZAG", x: 50, y: 75 },
      { pos: "ZAG", x: 25, y: 72 },
      { pos: "AD", x: 85, y: 46 },
      { pos: "MEI", x: 70, y: 46 },
      { pos: "MEI", x: 50, y: 32 },
      { pos: "MEI", x: 30, y: 46 },
      { pos: "AE", x: 15, y: 46 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
  },
  "5-3-2": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "AE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "AD", x: 85, y: 70 },
      { pos: "MC", x: 50, y: 44 },
      { pos: "VOL", x: 70, y: 52 },
      { pos: "VOL", x: 30, y: 52 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "AE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "AD", x: 85, y: 70 },
      { pos: "MC", x: 70, y: 46 },
      { pos: "MEI", x: 50, y: 38 },
      { pos: "MC", x: 30, y: 46 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "AE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "AD", x: 85, y: 70 },
      { pos: "MEI", x: 70, y: 42 },
      { pos: "MEI", x: 50, y: 32 },
      { pos: "MEI", x: 30, y: 42 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
  },
  "4-2-3-1": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 60, y: 54 },
      { pos: "VOL", x: 40, y: 54 },
      { pos: "MC", x: 50, y: 38 },
      { pos: "MD", x: 82, y: 36 },
      { pos: "ME", x: 18, y: 36 },
      { pos: "CA", x: 50, y: 14 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 60, y: 54 },
      { pos: "VOL", x: 40, y: 54 },
      { pos: "MEI", x: 50, y: 36 },
      { pos: "MD", x: 75, y: 28 },
      { pos: "ME", x: 25, y: 28 },
      { pos: "CA", x: 50, y: 14 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 50, y: 56 },
      { pos: "MEI", x: 50, y: 42 },
      { pos: "MD", x: 75, y: 24 },
      { pos: "ME", x: 25, y: 24 },
      { pos: "PD", x: 80, y: 14 },
      { pos: "CA", x: 50, y: 14 },
    ],
  },
};

export default function DraftBoard() {
  const [phase, setPhase] = useState<"setup" | "draft">("setup");

  // Estados da Prancheta (Setup)
  const [formation, setFormation] = useState("4-3-3");
  const [difficulty, setDifficulty] = useState("Normal");
  const [style, setStyle] = useState("Equilibrado");

  // estados do Draft
  const [team, setTeam] = useState(MOCK_TEAMS[0]);
  const [edition, setEdition] = useState(MOCK_EDITIONS[0]);
  const [field, setField] = useState<FieldSlot[]>([]);
  const [pool, setPool] = useState<Player[]>(MOCK_POOL);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

  // calcula o campo em tempo real durante o setup
  const currentSetupField = TACTICS[formation][style].map((pos) => ({
    ...pos,
    player: null,
  }));
  const activeField = phase === "setup" ? currentSetupField : field;

  // iniciar o Draft
  const startDraft = () => {
    setField(currentSetupField);
    randomizeTeam();
    randomizeEdition();
    setPhase("draft");
  };

  const randomizeTeam = () =>
    setTeam(MOCK_TEAMS[Math.floor(Math.random() * MOCK_TEAMS.length)]);
  const randomizeEdition = () =>
    setEdition(MOCK_EDITIONS[Math.floor(Math.random() * MOCK_EDITIONS.length)]);

  const handleSlotClick = (index: number) => {
    if (phase === "setup") return; // No setup, o campo é só visualização

    const slot = field[index];

    // Se o slot estiver ocupado, devolve pra lista
    if (slot.player) {
      setPool([...pool, slot.player]);
      const newField = [...field];
      newField[index].player = null;
      setField(newField);
      return;
    }

    // Se estiver vazio e houver jogador selecionado, posiciona ele
    if (selectedPlayerId) {
      const playerToPlace = pool.find((p) => p.id === selectedPlayerId)!;
      const newField = [...field];
      newField[index].player = playerToPlace;
      setField(newField);
      setPool(pool.filter((p) => p.id !== selectedPlayerId));
      setSelectedPlayerId(null);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start animate-in fade-in zoom-in-95">
      <div className="lg:col-span-5 flex flex-col space-y-8">
        {phase === "setup" ? (
          // --- FASE 1: A PRANCHETA ---
          <div className="w-full p-8 bg-[#FFFAF3] border-4 border-[#262626] shadow-[8px_8px_0px_#262626]">
            <h2 className="font-serif text-4xl uppercase mb-8 text-[#262626] border-b-2 border-[#262626]/10 pb-4">
              A <span className="text-[#BF1A1A] italic">Prancheta</span>
            </h2>

            <div className="space-y-8 mb-10">
              <div>
                <label className="font-bold tracking-widest uppercase text-xs mb-3 block text-[#262626]/60">
                  Formação Tática
                </label>
                <div className="flex gap-3 flex-wrap">
                  {Object.keys(TACTICS).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormation(f)}
                      className={`px-6 py-2 border-2 border-[#262626] font-bold transition-all ${
                        formation === f
                          ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]"
                          : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold tracking-widest uppercase text-xs mb-3 block text-[#262626]/60">
                  Estilo de Jogo
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["Retranca", "Equilibrado", "Ofensivo"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`px-6 py-2 border-2 border-[#262626] font-bold transition-all ${
                        style === s
                          ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]"
                          : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold tracking-widest uppercase text-xs mb-3 block text-[#262626]/60">
                  Dificuldade
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["Normal", "Lenda"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`px-6 py-2 border-2 border-[#262626] font-bold transition-all ${
                        difficulty === d
                          ? "bg-[#262626] text-[#FFFAF3] shadow-[2px_2px_0px_#BF1A1A]"
                          : "bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:-translate-y-0.5"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={startDraft}
              className="w-full bg-[#BF1A1A] text-[#FFFAF3] px-8 py-4 uppercase font-black tracking-widest border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all"
            >
              Sortear Time
            </button>
          </div>
        ) : (
          // --- FASE 2: O DRAFT (Sorteio e Escalação) ---
          <>
            <div className="bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626] p-6 rounded-sm">
              <div className="flex justify-between items-start mb-6 border-b-2 border-[#262626]/10 pb-4">
                <div>
                  <span className="font-bold tracking-widest uppercase text-[10px] text-[#262626]/50 block mb-1">
                    Time Sorteado
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#262626] leading-none uppercase">
                    {team}
                  </h2>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="font-bold tracking-widest uppercase text-[10px] text-[#262626]/50 block mb-1">
                    Edição
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#BF1A1A] leading-none">
                    {edition}
                  </h2>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={randomizeTeam}
                  className="flex-1 bg-[#FFFAF3] border-2 border-[#262626] shadow-[2px_2px_0px_#262626] px-4 py-2 font-bold uppercase text-xs tracking-wider hover:bg-[#262626] hover:text-[#FFFAF3] transition-colors"
                >
                  Mudar Time
                </button>
                <button
                  onClick={randomizeEdition}
                  className="flex-1 bg-[#FFFAF3] border-2 border-[#262626] shadow-[2px_2px_0px_#262626] px-4 py-2 font-bold uppercase text-xs tracking-wider hover:bg-[#262626] hover:text-[#FFFAF3] transition-colors"
                >
                  Mudar Edição
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626] p-6 rounded-sm">
              <h3 className="font-serif text-xl uppercase font-bold text-[#262626] mb-4 flex items-center justify-between">
                Disponíveis{" "}
                <span className="bg-[#262626] text-[#FFFAF3] text-xs px-2 py-1 rounded-full font-sans">
                  {pool.length}
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[400px] pr-2">
                {pool.map((p) => (
                  <button
                    key={p.id}
                    onClick={() =>
                      setSelectedPlayerId(
                        p.id === selectedPlayerId ? null : p.id,
                      )
                    }
                    className={`flex flex-col items-center justify-center p-3 border-2 transition-all ${
                      selectedPlayerId === p.id
                        ? "border-[#BF1A1A] bg-[#BF1A1A] text-[#FFFAF3] shadow-[3px_3px_0px_#262626] -translate-y-1"
                        : "border-[#262626] bg-[#FFFAF3] text-[#262626] shadow-[2px_2px_0px_#262626] hover:bg-[#262626]/5"
                    }`}
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {p.position.join("/")}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-center leading-tight">
                      {p.shortName}
                    </span>
                  </button>
                ))}
                {pool.length === 0 && (
                  <div className="col-span-full text-center py-8 text-[#262626]/50 font-medium italic">
                    Nenhum jogador disponível no momento.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="lg:col-span-7">
        <FootballCamp>
          {activeField.map((slot, idx) => (
            <PlayerButton
              key={idx}
              slot={slot}
              isActive={selectedPlayerId !== null && !slot.player}
              onClick={() => handleSlotClick(idx)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
            />
          ))}
        </FootballCamp>
      </div>
    </div>
  );
}
