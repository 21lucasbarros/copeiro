"use client";

import { useDraftGame } from "@/hooks/use-draft-game";
import { DraftPanel } from "./draft-panel";
import { SetupPanel } from "./setup-panel";
import { FootballCamp } from "./ui/football-camp";
import { PlayerButton } from "./ui/player-button";

export default function DraftBoard() {
  const { state, setters, actions } = useDraftGame();

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start animate-in fade-in zoom-in-95">
      <div className="lg:col-span-5 flex flex-col space-y-6">
        {state.phase === "setup" ? (
          <SetupPanel
            formation={state.formation}
            setFormation={setters.setFormation}
            style={state.style}
            setStyle={setters.setStyle}
            difficulty={state.difficulty}
            setDifficulty={setters.setDifficulty}
            onStartDraft={actions.startDraft}
          />
        ) : (
          <DraftPanel
            team={state.team}
            edition={state.edition}
            pool={state.pool}
            field={state.field}
            selectedPlayerId={state.selectedPlayerId}
            setSelectedPlayerId={setters.setSelectedPlayerId}
            isRollingTeam={state.isRollingTeam}
            isRollingEdition={state.isRollingEdition}
            isRollingPlayers={state.isRollingPlayers}
            rerollsLeft={state.rerollsLeft}
            hasPlacedPlayers={state.hasPlacedPlayers}
            emptyFieldPositions={state.emptyFieldPositions}
            onRandomizeTeam={actions.handleRandomizeTeam}
            onRandomizeEdition={actions.handleRandomizeEdition}
          />
        )}
      </div>

      <div className="lg:col-span-7 flex justify-center items-center">
        <FootballCamp>
          {state.activeField.map((slot, idx) => {
            const isDimmed =
              state.selectedPlayerId &&
              !slot.player &&
              !state.validPositionsForSelected.includes(slot.pos);

            return (
              <PlayerButton
                key={idx}
                slot={slot}
                isActive={state.selectedPlayerId !== null && !slot.player}
                onClick={() => actions.handleSlotClick(idx)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDimmed ? "opacity-30 grayscale" : "opacity-100"}`}
              />
            );
          })}
        </FootballCamp>
      </div>
    </div>
  );
}
