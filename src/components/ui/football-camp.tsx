import React from "react";
import { FieldSlot } from "./player-button";

export const FORMATIONS: Record<string, Omit<FieldSlot, "player">[]> = {
  "4-3-3": [
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
  "4-4-2": [
    { pos: "GOL", x: 50, y: 88 },
    { pos: "LD", x: 86, y: 64 },
    { pos: "ZAG", x: 68, y: 75 },
    { pos: "ZAG", x: 32, y: 75 },
    { pos: "LE", x: 14, y: 64 },
    { pos: "MD", x: 80, y: 46 },
    { pos: "VOL", x: 60, y: 52 },
    { pos: "VOL", x: 40, y: 52 },
    { pos: "ME", x: 20, y: 46 },
    { pos: "CA", x: 65, y: 20 },
    { pos: "CA", x: 35, y: 20 },
  ],
  "3-5-2": [
    { pos: "GOL", x: 50, y: 88 },
    { pos: "ZAG", x: 75, y: 72 },
    { pos: "ZAG", x: 50, y: 75 },
    { pos: "ZAG", x: 25, y: 72 },
    { pos: "AD", x: 85, y: 46 },
    { pos: "VOL", x: 60, y: 56 },
    { pos: "MEI", x: 50, y: 40 },
    { pos: "VOL", x: 40, y: 56 },
    { pos: "AE", x: 15, y: 46 },
    { pos: "CA", x: 65, y: 20 },
    { pos: "CA", x: 35, y: 20 },
  ],
};

export function FootballCamp({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full aspect-[3/4] sm:aspect-[4/4] lg:aspect-[3/4] max-w-[600px] mx-auto border-4 border-[#262626] shadow-[8px_8px_0px_#262626] rounded-sm p-4 overflow-hidden"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          #4A7C46,
          #4A7C46 10%,
          #52854E 10%,
          #52854E 20%
        )`,
      }}
    >
      {/* Linhas do Campo - Ficam travadas no fundo */}
      <div className="absolute inset-4 border-2 border-[#FFFAF3]/60 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#FFFAF3]/60 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 border-2 border-[#FFFAF3]/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#FFFAF3]/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 w-[50%] h-[15%] border-b-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/2 w-[25%] h-[5%] border-b-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
        <div className="absolute top-[15%] left-1/2 w-12 h-6 border-b-2 border-x-2 border-[#FFFAF3]/60 rounded-b-full -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[50%] h-[15%] border-t-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[25%] h-[5%] border-t-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
        <div className="absolute bottom-[15%] left-1/2 w-12 h-6 border-t-2 border-x-2 border-[#FFFAF3]/60 rounded-t-full -translate-x-1/2"></div>
      </div>

      {/* Os jogadores ou slots vazios vão renderizar aqui por cima das linhas */}
      {children}
    </div>
  );
}
