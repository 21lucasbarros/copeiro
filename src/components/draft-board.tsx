"use client";

import React, { useState, useEffect } from "react";
import { PlayerButton, type FieldSlot, type Player } from "./ui/player-button";
import { FootballCamp } from "./ui/football-camp";

// --- DADOS MOCKADOS PARA O DRAFT ---
const MOCK_TEAMS = [
  "Santos",
  "Boca Juniors",
  "São Paulo",
  "River Plate",
  "Flamengo",
  "Palmeiras",
];
const MOCK_EDITIONS = ["1992", "2000", "2007", "2011", "2019", "2021"];

const ALL_POSITIONS = [
  "GOL",
  "LD",
  "ZAG",
  "LE",
  "VOL",
  "MC",
  "MEI",
  "MD",
  "ME",
  "PD",
  "PE",
  "CA",
  "CM",
  "AD",
  "AE",
];

// Dicionário de Nomes por Time para gerar os jogadores de forma autêntica
const NAMES_BY_TEAM: Record<string, string[]> = {
  Santos: [
    "Neymar",
    "Ganso",
    "Elano",
    "Danilo",
    "A. Sandro",
    "Arouca",
    "Borges",
    "Dracena",
    "Léo",
    "Rafael",
    "Zé Eduardo",
    "Durval",
    "Pará",
    "F. Anderson",
    "Alan Patrick",
  ],
  "Boca Juniors": [
    "Riquelme",
    "Palermo",
    "Tevez",
    "Ibarra",
    "Battaglia",
    "Gago",
    "Abbondanzieri",
    "Schiavi",
    "Delgado",
    "B. Schelotto",
    "Clemente",
    "Burdisso",
    "C. Rodríguez",
    "Ledesma",
  ],
  "São Paulo": [
    "R. Ceni",
    "Cafu",
    "Lugano",
    "Mineiro",
    "Josué",
    "Amoroso",
    "Aloísio",
    "Müller",
    "Raí",
    "Zetti",
    "Fabão",
    "Danilo",
    "Cicinho",
    "Luizão",
    "Miranda",
  ],
  "River Plate": [
    "Francescoli",
    "Gallardo",
    "Ortega",
    "Aimar",
    "Saviola",
    "Crespo",
    "E. Pérez",
    "Armani",
    "Ponzio",
    "Pratto",
    "Montiel",
    "Casco",
    "Nacho F.",
    "Quintero",
    "Maidana",
  ],
  Flamengo: [
    "Gabigol",
    "B. Henrique",
    "Arrascaeta",
    "E. Ribeiro",
    "Gerson",
    "F. Luís",
    "Rafinha",
    "R. Caio",
    "D. Alves",
    "Zico",
    "Adílio",
    "Nunes",
    "Júnior",
    "Leandro",
    "Andrade",
  ],
  Palmeiras: [
    "Dudu",
    "Gómez",
    "Weverton",
    "Veiga",
    "Rony",
    "Marcos",
    "Edmundo",
    "Evair",
    "Alex",
    "Zinho",
    "R. Carlos",
    "Mazzola",
    "C. Sampaio",
    "Arce",
    "Velloso",
  ],
};

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
      { pos: "MD", x: 85, y: 48 },
      { pos: "VOL", x: 60, y: 56 },
      { pos: "MC", x: 50, y: 40 },
      { pos: "VOL", x: 40, y: 56 },
      { pos: "ME", x: 15, y: 48 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "ZAG", x: 75, y: 72 },
      { pos: "ZAG", x: 50, y: 75 },
      { pos: "ZAG", x: 25, y: 72 },
      { pos: "MD", x: 85, y: 46 },
      { pos: "VOL", x: 65, y: 54 },
      { pos: "MEI", x: 50, y: 38 },
      { pos: "MC", x: 35, y: 54 },
      { pos: "ME", x: 15, y: 46 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "ZAG", x: 75, y: 72 },
      { pos: "ZAG", x: 50, y: 75 },
      { pos: "ZAG", x: 25, y: 72 },
      { pos: "MD", x: 85, y: 40 },
      { pos: "MC", x: 70, y: 46 },
      { pos: "MEI", x: 50, y: 32 },
      { pos: "MC", x: 30, y: 46 },
      { pos: "ME", x: 15, y: 40 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
  },
  "5-3-2": {
    Retranca: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "LD", x: 85, y: 70 },
      { pos: "MC", x: 50, y: 44 },
      { pos: "VOL", x: 70, y: 52 },
      { pos: "VOL", x: 30, y: 52 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "LD", x: 85, y: 70 },
      { pos: "VOL", x: 70, y: 46 },
      { pos: "MEI", x: 50, y: 38 },
      { pos: "MC", x: 30, y: 46 },
      { pos: "CA", x: 65, y: 20 },
      { pos: "CA", x: 35, y: 20 },
    ],
    Ofensivo: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LE", x: 15, y: 70 },
      { pos: "ZAG", x: 35, y: 75 },
      { pos: "ZAG", x: 50, y: 78 },
      { pos: "ZAG", x: 65, y: 75 },
      { pos: "LD", x: 85, y: 70 },
      { pos: "MC", x: 70, y: 42 },
      { pos: "MEI", x: 50, y: 32 },
      { pos: "MC", x: 30, y: 42 },
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
      { pos: "PD", x: 82, y: 36 },
      { pos: "PE", x: 18, y: 36 },
      { pos: "CA", x: 50, y: 14 },
    ],
    Equilibrado: [
      { pos: "GOL", x: 50, y: 88 },
      { pos: "LD", x: 86, y: 64 },
      { pos: "ZAG", x: 68, y: 75 },
      { pos: "ZAG", x: 32, y: 75 },
      { pos: "LE", x: 14, y: 64 },
      { pos: "VOL", x: 60, y: 54 },
      { pos: "MC", x: 40, y: 54 },
      { pos: "MEI", x: 50, y: 36 },
      { pos: "PD", x: 75, y: 28 },
      { pos: "PE", x: 25, y: 28 },
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

// Gera 5 jogadores garantindo que as posições sejam aleatórias para exibir todas as opções possíveis.
const generatePlayersForTeam = (
  team: string,
  currentField: FieldSlot[],
): Player[] => {
  const names = NAMES_BY_TEAM[team] || [
    "Jogador A",
    "Jogador B",
    "Jogador C",
    "Jogador D",
    "Jogador E",
  ];
  const emptySlots = currentField.filter((s) => !s.player);
  if (emptySlots.length === 0) return [];

  const pool: Player[] = [];
  for (let i = 0; i < 5; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const rating = Math.floor(Math.random() * 15) + 78;

    // Apenas 1 jogador (i === 0) ganha uma posição focada nas vagas abertas para evitar que o draft "trave" (softlock).
    // Os outros 4 recebem posições de TODO o leque de posições, inclusive as que já foram preenchidas no campo.
    let primaryPos = "";
    if (i === 0 && emptySlots.length > 0) {
      primaryPos =
        emptySlots[Math.floor(Math.random() * emptySlots.length)].pos;
    } else {
      primaryPos =
        ALL_POSITIONS[Math.floor(Math.random() * ALL_POSITIONS.length)];
    }

    const positions = [primaryPos];
    if (Math.random() > 0.6) {
      const secondary =
        ALL_POSITIONS[Math.floor(Math.random() * ALL_POSITIONS.length)];
      if (!positions.includes(secondary)) positions.push(secondary);
    }

    pool.push({
      id: `${rating}-${Math.random().toString(36).substring(2, 7)}`,
      name: randomName,
      shortName: randomName,
      position: positions,
    });
  }

  // Embaralha para que o jogador de posição "garantida" não fique sempre na primeira linha
  return pool.sort(() => Math.random() - 0.5);
};

export default function DraftBoard() {
  const [phase, setPhase] = useState<"setup" | "draft">("setup");

  const [formation, setFormation] = useState("4-3-3");
  const [difficulty, setDifficulty] = useState("Normal");
  const [style, setStyle] = useState("Equilibrado");

  const [team, setTeam] = useState(MOCK_TEAMS[0]);
  const [edition, setEdition] = useState(MOCK_EDITIONS[0]);
  const [field, setField] = useState<FieldSlot[]>([]);
  const [pool, setPool] = useState<Player[]>([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

  const [isRollingTeam, setIsRollingTeam] = useState(false);
  const [isRollingEdition, setIsRollingEdition] = useState(false);
  const [isRollingPlayers, setIsRollingPlayers] = useState(false);

  const [rerollsLeft, setRerollsLeft] = useState(3);

  const currentSetupField = TACTICS[formation][style].map((pos) => ({
    ...pos,
    player: null,
  }));
  const activeField = phase === "setup" ? currentSetupField : field;

  // Monitora se a roleta do time/edição parou para gerar os jogadores adequados
  useEffect(() => {
    if (
      phase === "draft" &&
      !isRollingTeam &&
      !isRollingEdition &&
      field.length > 0
    ) {
      const emptySlots = field.filter((s) => !s.player);
      if (emptySlots.length > 0 && pool.length === 0 && !isRollingPlayers) {
        setIsRollingPlayers(true);
        const timer = setTimeout(() => {
          setPool(generatePlayersForTeam(team, field));
          setIsRollingPlayers(false);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, isRollingTeam, isRollingEdition, pool.length, field, team]);

  const animateSystemRoll = (
    items: string[],
    setFinalValue: React.Dispatch<React.SetStateAction<string>>,
    setRollingState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setRollingState(true);
    let currentDelay = 40;
    let rolls = 0;
    const maxRolls = 20;

    const roll = () => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setFinalValue(randomItem);
      rolls++;

      if (rolls < maxRolls) {
        currentDelay = currentDelay * 1.15;
        setTimeout(roll, currentDelay);
      } else {
        setRollingState(false);
      }
    };
    roll();
  };

  const startDraft = () => {
    setField(currentSetupField);
    setPhase("draft");
    setRerollsLeft(3);
    animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
    animateSystemRoll(MOCK_EDITIONS, setEdition, setIsRollingEdition);
  };

  const handleRandomizeTeam = () => {
    if (!isRollingTeam && rerollsLeft > 0) {
      setRerollsLeft((prev) => prev - 1);
      setPool([]); // Zera a lista para acionar a rolagem de novos jogadores após o time parar
      animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
    }
  };

  const handleRandomizeEdition = () => {
    if (!isRollingEdition && rerollsLeft > 0) {
      setRerollsLeft((prev) => prev - 1);
      setPool([]); // Zera a lista para gerar jogadores da nova edição
      animateSystemRoll(MOCK_EDITIONS, setEdition, setIsRollingEdition);
    }
  };

  const handleSlotClick = (index: number) => {
    if (
      phase === "setup" ||
      isRollingTeam ||
      isRollingEdition ||
      isRollingPlayers
    )
      return;

    const slot = field[index];

    if (slot.player) {
      setPool([...pool, slot.player]);
      const newField = [...field];
      newField[index].player = null;
      setField(newField);
      return;
    }

    if (selectedPlayerId) {
      const playerToPlace = pool.find((p) => p.id === selectedPlayerId)!;

      if (!playerToPlace.position.includes(slot.pos)) {
        alert(
          `${playerToPlace.shortName} não atua como ${slot.pos}. Posições válidas: ${playerToPlace.position.join(", ")}`,
        );
        return;
      }

      const newField = [...field];
      newField[index].player = playerToPlace;
      setField(newField);
      setSelectedPlayerId(null);

      const remainingEmpty = newField.filter((s) => !s.player);
      if (remainingEmpty.length > 0) {
        setPool([]); // Zera o pool atual
        animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
        animateSystemRoll(MOCK_EDITIONS, setEdition, setIsRollingEdition);
      } else {
        setPool([]); // Draft finalizado!
      }
    }
  };

  // Helper para feedback visual no campo
  const validPositionsForSelected = selectedPlayerId
    ? pool.find((p) => p.id === selectedPlayerId)?.position || []
    : [];

  // Posições que ainda estão vazias no campo
  const emptyFieldPositions = field.filter((s) => !s.player).map((s) => s.pos);

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start animate-in fade-in zoom-in-95">
      <div className="lg:col-span-5 flex flex-col space-y-6">
        {phase === "setup" ? (
          // --- FASE 1: A PRANCHETA ---
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
                      className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${
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
                <label className="font-bold tracking-widest uppercase text-[10px] mb-2 block text-[#262626]/60">
                  Estilo de Jogo
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["Retranca", "Equilibrado", "Ofensivo"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${
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
                <label className="font-bold tracking-widest uppercase text-[10px] mb-2 block text-[#262626]/60">
                  Dificuldade
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["Normal", "Lenda"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`px-4 py-1.5 text-sm border-2 border-[#262626] font-bold transition-all ${
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
              className="w-full bg-[#BF1A1A] text-[#FFFAF3] px-6 py-3 uppercase font-black tracking-widest text-sm border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all"
            >
              Sortear Time
            </button>
          </div>
        ) : (
          // --- FASE 2: O DRAFT ---
          <div className="flex flex-col space-y-4">
            {/* Box 1: Equipe e Edição Sorteada */}
            <div className="bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626] p-4 sm:p-5 rounded-sm">
              <div className="flex justify-between items-end mb-5 pb-5 border-b border-[#262626]/20">
                <div className="flex-1">
                  <span
                    className="font-bold tracking-widest uppercase text-[9px] text-[#262626]/50 block mb-1"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Time Sorteado
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl font-black text-[#262626] leading-none uppercase transition-all duration-75 ${isRollingTeam ? "blur-[1px] scale-[0.98] opacity-70" : "scale-100 opacity-100"}`}
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {team}
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className="font-bold tracking-widest uppercase text-[9px] text-[#262626]/50 block mb-1"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Edição
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl font-black text-[#BF1A1A] leading-none transition-all duration-75 ${isRollingEdition ? "blur-[1px] scale-[0.98] opacity-70" : "scale-100 opacity-100"}`}
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {edition}
                  </h2>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <button
                  onClick={handleRandomizeTeam}
                  disabled={
                    isRollingTeam || isRollingEdition || rerollsLeft === 0
                  }
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                  className="flex-1 bg-[#FFFAF3] border border-[#262626] py-3 font-bold uppercase text-xs tracking-wider hover:bg-[#BF1A1A] hover:text-[#FFFAF3] hover:border-[#BF1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Mudar Time
                </button>
                <button
                  onClick={handleRandomizeEdition}
                  disabled={
                    isRollingTeam || isRollingEdition || rerollsLeft === 0
                  }
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                  className="flex-1 bg-[#FFFAF3] border border-[#262626] py-3 font-bold uppercase text-xs tracking-wider hover:bg-[#BF1A1A] hover:text-[#FFFAF3] hover:border-[#BF1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Mudar Edição
                </button>
              </div>

              <div className="w-full text-center">
                <p
                  className={`text-[10px] font-bold tracking-widest uppercase ${rerollsLeft === 0 ? "text-[#BF1A1A]" : "text-[#262626]/50"}`}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Rerolls restantes: {rerollsLeft}
                </p>
              </div>
            </div>

            {/* Box 2: Jogadores Disponíveis da Rodada */}
            <div className="bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626] rounded-sm flex flex-col max-h-[350px] overflow-hidden">
              <div className="p-3 border-b-4 border-[#262626] bg-[#BF1A1A] z-10 flex justify-between items-center">
                <h3
                  className="font-black tracking-widest uppercase text-[11px] text-[#FFFAF3]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Escolha um Jogador
                </h3>
              </div>

              <div
                className="flex-1 overflow-y-auto"
                style={{ scrollbarWidth: "thin" }}
              >
                {isRollingPlayers ? (
                  <div className="flex flex-col items-center justify-center py-16 opacity-60">
                    <div className="w-8 h-8 border-4 border-[#BF1A1A] border-t-transparent rounded-full animate-spin mb-3"></div>
                    <span
                      className="font-bold tracking-widest uppercase text-[10px] text-[#262626]"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      Sorteando elenco...
                    </span>
                  </div>
                ) : (
                  <>
                    {pool.map((p, index) => {
                      const posString = p.position.join("/");
                      // Verifica se alguma posição do jogador corresponde a uma vaga ainda aberta no campo
                      const isPlayable = p.position.some((pos) =>
                        emptyFieldPositions.includes(pos),
                      );

                      return (
                        <button
                          key={p.id}
                          disabled={!isPlayable}
                          onClick={() =>
                            setSelectedPlayerId(
                              p.id === selectedPlayerId ? null : p.id,
                            )
                          }
                          style={{ fontFamily: "'Roboto', sans-serif" }}
                          className={`w-full flex items-center p-2.5 sm:p-3 border-b border-[#262626]/20 transition-colors ${
                            !isPlayable
                              ? "bg-black/5 opacity-40 grayscale cursor-not-allowed" // Feedback visual de bloqueado
                              : selectedPlayerId === p.id
                                ? "bg-[#BF1A1A] text-[#FFFAF3]"
                                : "bg-[#FFFAF3] text-[#262626] hover:bg-black/5"
                          }`}
                        >
                          <span
                            className={`font-black w-8 sm:w-10 text-left text-sm opacity-60 ${
                              selectedPlayerId === p.id
                                ? "text-[#FFFAF3]/80"
                                : "text-[#262626]"
                            }`}
                          >
                            #{index + 1}
                          </span>

                          <span className="font-black text-base sm:text-lg flex-1 text-left">
                            {p.shortName}
                          </span>

                          <div className="flex items-center justify-end w-20 sm:w-24">
                            <span
                              className={`text-[10px] sm:text-[11px] font-black tracking-widest uppercase ${
                                selectedPlayerId === p.id
                                  ? "text-[#FFFAF3]/80"
                                  : "text-[#262626]/60"
                              }`}
                            >
                              {posString}
                            </span>
                          </div>

                          <span className="font-black text-lg sm:text-xl text-right w-10 sm:w-12 ml-2">
                            {p.id.split("-")[0]}
                          </span>
                        </button>
                      );
                    })}

                    {pool.length === 0 &&
                      field.filter((s) => !s.player).length === 0 && (
                        <div
                          className="text-center py-12 text-[#262626]/50 font-bold italic text-sm"
                          style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                          Equipe Completa!
                        </div>
                      )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-7 flex justify-center items-center">
        <FootballCamp>
          {activeField.map((slot, idx) => {
            const isDimmed =
              selectedPlayerId &&
              !slot.player &&
              !validPositionsForSelected.includes(slot.pos);

            return (
              <PlayerButton
                key={idx}
                slot={slot}
                isActive={selectedPlayerId !== null && !slot.player}
                onClick={() => handleSlotClick(idx)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDimmed ? "opacity-30 grayscale" : "opacity-100"}`}
              />
            );
          })}
        </FootballCamp>
      </div>
    </div>
  );
}
