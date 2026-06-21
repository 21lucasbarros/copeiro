export interface Player {
  name: string;
  shortName: string;
  position: string;
  x?: number;
  y?: number;
}

export interface PlayerButtonProps {
  player: Player;
  className?: string;
  style?: React.CSSProperties;
}

export function PlayerButton({
  player,
  className = "",
  style,
}: PlayerButtonProps) {
  return (
    <div
      className={`flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:z-30 cursor-grab group ${className}`}
      style={style}
    >
      {/* O Botão de Acrílico Físico */}
      <div className="relative w-10 h-10 sm:w-12.5 sm:h-12.5 rounded-full border-[3px] border-[#262626] bg-[#FFFAF3] shadow-[0_4px_0_#262626,0_6px_8px_rgba(0,0,0,0.4)] group-hover:border-[#BF1A1A] group-hover:shadow-[0_4px_0_#BF1A1A,0_8px_12px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center z-10 overflow-hidden">
        {/* Brilho do Acrílico */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/90 to-transparent z-20 pointer-events-none"></div>

        {/* Miolo do botão com a posição */}
        <div className="absolute inset-0.75 sm:inset-1 bg-[#FFFAF3] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-[#262626]/20 flex flex-col items-center justify-center z-10 group-hover:border-[#BF1A1A]/30 transition-colors">
          <span
            className="text-[10px] sm:text-xs font-black text-[#262626] group-hover:text-[#BF1A1A] transition-colors leading-none tracking-widest"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {player.position}
          </span>
        </div>
      </div>

      {/* Etiqueta de Nome */}
      <div className="bg-[#FFFAF3] border-2 border-[#262626] rounded-sm px-2.5 py-0.5 mt-1.5 relative z-20 shadow-[2px_2px_0_#262626] group-hover:border-[#BF1A1A] group-hover:text-[#BF1A1A] group-hover:shadow-[2px_2px_0_#BF1A1A] transition-all">
        <span
          className="text-[11px] sm:text-[13px] font-bold text-[#262626] group-hover:text-[#BF1A1A] whitespace-nowrap uppercase tracking-wide block leading-none transition-colors"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {player.shortName}
        </span>
      </div>
    </div>
  );
}
