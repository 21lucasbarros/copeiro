import React from "react";

export interface Player {
  id: string;
  name: string;
  shortName: string;
  position: string[]; // agora é um array, ex: ["PE", "CA"]
}

export interface FieldSlot {
  pos: string; // a posição do campo (ex: "LD")
  x: number;
  y: number;
  player: Player | null; // null significa que o botão está vazio
}

interface PlayerButtonProps {
  slot: FieldSlot;
  isActive?: boolean; // para quando formos "colar" um jogador ali
  onClick?: () => void;
  className?: string;
}

export function PlayerButton({
  slot,
  isActive,
  onClick,
  className = "",
}: PlayerButtonProps) {
  const isEmpty = !slot.player;

  return (
    <div
      onClick={onClick}
      className={`absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        isEmpty
          ? "hover:scale-105 cursor-pointer"
          : "hover:scale-110 cursor-grab hover:z-30"
      } group ${className}`}
      style={{
        left: `calc(${slot.x}% * 0.92 + 4%)`,
        top: `calc(${slot.y}% * 0.92 + 4%)`,
      }}
    >
      {/* O Botão de Acrílico Físico */}
      <div
        className={`relative w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border-[3px] flex items-center justify-center z-10 transition-all overflow-hidden ${
          isEmpty
            ? `bg-transparent border-dashed ${isActive ? "border-[#BF1A1A] bg-[#BF1A1A]/10" : "border-[#262626]/40 hover:border-[#BF1A1A]"}`
            : "border-[#262626] bg-[#FFFAF3] shadow-[0_4px_0_#262626,0_6px_8px_rgba(0,0,0,0.4)] group-hover:border-[#BF1A1A] group-hover:shadow-[0_4px_0_#BF1A1A,0_8px_12px_rgba(0,0,0,0.5)]"
        }`}
      >
        {!isEmpty && (
          <>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/90 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-[3px] sm:inset-[4px] bg-[#FFFAF3] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-[#262626]/20 flex flex-col items-center justify-center z-10 group-hover:border-[#BF1A1A]/30 transition-colors">
              <span
                className="text-[10px] sm:text-xs font-black text-[#262626] group-hover:text-[#BF1A1A] transition-colors leading-none tracking-widest"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {slot.player?.position[0]} {/* Mostra a posição principal */}
              </span>
            </div>
          </>
        )}

        {isEmpty && (
          <span
            className={`text-[10px] font-black ${isActive ? "text-[#BF1A1A]" : "text-[#262626]/40 group-hover:text-[#BF1A1A]"}`}
          >
            {slot.pos}
          </span>
        )}
      </div>

      {/* Etiqueta de Nome (Só aparece se tiver jogador) */}
      {!isEmpty && (
        <div className="bg-[#FFFAF3] border-2 border-[#262626] rounded-sm px-2.5 py-0.5 mt-1.5 relative z-20 shadow-[2px_2px_0_#262626] group-hover:border-[#BF1A1A] group-hover:text-[#BF1A1A] group-hover:shadow-[2px_2px_0_#BF1A1A] transition-all">
          <span
            className="text-[11px] sm:text-[13px] font-bold text-[#262626] group-hover:text-[#BF1A1A] whitespace-nowrap uppercase tracking-wide block leading-none transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {slot.player?.shortName}
          </span>
        </div>
      )}
    </div>
  );
}
