import { FieldSlot, Player } from "./ui/player-button";

interface DraftPanelProps {
  team: string;
  edition: string;
  pool: Player[];
  field: FieldSlot[];
  selectedPlayerId: string | null;
  setSelectedPlayerId: (id: string | null) => void;
  isRollingTeam: boolean;
  isRollingEdition: boolean;
  isRollingPlayers: boolean;
  rerollsLeft: number;
  emptyFieldPositions: string[];
  onRandomizeTeam: () => void;
  onRandomizeEdition: () => void;
}

export function DraftPanel({
  team,
  edition,
  pool,
  field,
  selectedPlayerId,
  setSelectedPlayerId,
  isRollingTeam,
  isRollingEdition,
  isRollingPlayers,
  rerollsLeft,
  emptyFieldPositions,
  onRandomizeTeam,
  onRandomizeEdition,
}: DraftPanelProps) {
  return (
    <div className="flex flex-col space-y-4">
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
            onClick={onRandomizeTeam}
            disabled={isRollingTeam || isRollingEdition || rerollsLeft === 0}
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className="flex-1 bg-[#FFFAF3] border border-[#262626] py-3 font-bold uppercase text-xs tracking-wider hover:bg-[#BF1A1A] hover:text-[#FFFAF3] hover:border-[#BF1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mudar Time
          </button>
          <button
            onClick={onRandomizeEdition}
            disabled={isRollingTeam || isRollingEdition || rerollsLeft === 0}
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

      <div className="bg-[#FFFAF3] border-4 border-[#262626] shadow-[6px_6px_0px_#262626] rounded-sm flex flex-col h-[500px] overflow-hidden">
        <div className="p-3 border-b-4 border-[#262626] bg-[#BF1A1A] z-10 flex justify-between items-center">
          <h3
            className="font-black tracking-widest uppercase text-[11px] text-[#FFFAF3]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Escolha um Jogador ({pool.length})
          </h3>
        </div>

        <div
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {isRollingPlayers ? (
            <div className="flex flex-col items-center justify-center py-16 opacity-60 h-full">
              <div className="w-8 h-8 border-4 border-[#BF1A1A] border-t-transparent rounded-full animate-spin mb-3"></div>
              <span
                className="font-bold tracking-widest uppercase text-[10px] text-[#262626]"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Carregando elenco...
              </span>
            </div>
          ) : (
            <>
              {pool.map((p) => {
                // 1. Verifica se o jogador JÁ ESTÁ NO CAMPO baseado no nome
                const isAlreadyDrafted = field.some(
                  (slot) => slot.player?.shortName === p.shortName,
                );

                // 2. Verifica se ainda há vaga para a posição de ofício dele
                const canPlayInRemainingPositions = p.position.some((pos) =>
                  emptyFieldPositions.includes(pos),
                );

                // 3. Só pode ser selecionado se NÃO estiver no campo e SE tiver vaga na posição
                const isPlayable =
                  !isAlreadyDrafted && canPlayInRemainingPositions;

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
                    className={`w-full flex items-center p-2.5 sm:p-3 border-b border-[#262626]/20 transition-colors ${!isPlayable ? "bg-black/5 opacity-40 grayscale cursor-not-allowed" : selectedPlayerId === p.id ? "bg-[#BF1A1A] text-[#FFFAF3]" : "bg-[#FFFAF3] text-[#262626] hover:bg-black/5"}`}
                  >
                    <span
                      className={`font-black w-8 sm:w-10 text-left text-sm opacity-60 ${selectedPlayerId === p.id ? "text-[#FFFAF3]/80" : "text-[#262626]"}`}
                    >
                      {p.jerseyNumber ? `#${p.jerseyNumber}` : ""}
                    </span>
                    <span className="font-black text-base sm:text-lg flex-1 text-left line-clamp-1">
                      {p.shortName}
                    </span>
                    <div className="flex items-center justify-end w-20 sm:w-24">
                      <span
                        className={`text-[10px] sm:text-[11px] font-black tracking-widest uppercase ${selectedPlayerId === p.id ? "text-[#FFFAF3]/80" : "text-[#262626]/60"}`}
                      >
                        {p.position.join("/")}
                      </span>
                    </div>

                    {/* Altera visualmente para mostrar que já foi pego */}
                    <span className="font-black text-lg sm:text-xl text-right w-[50px] ml-2">
                      {isAlreadyDrafted ? (
                        <span className="text-[8px] sm:text-[9px] text-[#BF1A1A] uppercase tracking-tighter">
                          Escalado
                        </span>
                      ) : (
                        p.id.split("-")[0]
                      )}
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
  );
}
