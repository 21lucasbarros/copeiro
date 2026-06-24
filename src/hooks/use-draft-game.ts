import { useState, useEffect } from "react";
import {
  MOCK_TEAMS,
  MOCK_EDITIONS,
  TACTICS,
  generatePlayersForTeam,
} from "../lib/draft-data";
import { FieldSlot, Player } from "@/components/ui/player-button";

export function useDraftGame() {
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

  const currentSetupField =
    TACTICS[formation]?.[style]?.map((pos) => ({ ...pos, player: null })) || [];
  const activeField = phase === "setup" ? currentSetupField : field;
  const hasPlacedPlayers = field.some((s) => s.player !== null);
  const validPositionsForSelected = selectedPlayerId
    ? pool.find((p) => p.id === selectedPlayerId)?.position || []
    : [];
  const emptyFieldPositions = field.filter((s) => !s.player).map((s) => s.pos);

  useEffect(() => {
    if (
      phase === "draft" &&
      !isRollingTeam &&
      !isRollingEdition &&
      isRollingPlayers
    ) {
      const emptySlots = field.filter((s) => !s.player);
      if (emptySlots.length > 0 && pool.length === 0) {
        const timer = setTimeout(() => {
          setPool(generatePlayersForTeam(team, field));
          setIsRollingPlayers(false);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [
    phase,
    isRollingTeam,
    isRollingEdition,
    isRollingPlayers,
    pool.length,
    field,
    team,
  ]);

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
      setFinalValue(items[Math.floor(Math.random() * items.length)]);
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
    setIsRollingPlayers(true);
    animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
    animateSystemRoll(MOCK_EDITIONS, setEdition, setIsRollingEdition);
  };

  const handleRandomizeTeam = () => {
    if (!isRollingTeam && rerollsLeft > 0) {
      setRerollsLeft((prev) => prev - 1);
      setPool([]);
      setIsRollingPlayers(true);
      animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
    }
  };

  const handleRandomizeEdition = () => {
    if (!isRollingEdition && rerollsLeft > 0) {
      setRerollsLeft((prev) => prev - 1);
      setPool([]);
      setIsRollingPlayers(true);
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
        setPool([]);
        setIsRollingPlayers(true);
        animateSystemRoll(MOCK_TEAMS, setTeam, setIsRollingTeam);
        animateSystemRoll(MOCK_EDITIONS, setEdition, setIsRollingEdition);
      } else {
        setPool([]);
        setIsRollingPlayers(false);
      }
    }
  };

  return {
    state: {
      phase,
      formation,
      difficulty,
      style,
      team,
      edition,
      pool,
      selectedPlayerId,
      isRollingTeam,
      isRollingEdition,
      isRollingPlayers,
      rerollsLeft,
      activeField,
      hasPlacedPlayers,
      validPositionsForSelected,
      emptyFieldPositions,
      field,
    },
    setters: { setFormation, setDifficulty, setStyle, setSelectedPlayerId },
    actions: {
      startDraft,
      handleRandomizeTeam,
      handleRandomizeEdition,
      handleSlotClick,
    },
  };
}
