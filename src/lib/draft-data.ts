import { FieldSlot, Player } from "@/components/ui/player-button";
import { PLAYERS_DB, POSITIONS, Position } from "./players-db";

export const MOCK_TEAMS = Object.keys(PLAYERS_DB);

export const MOCK_EDITIONS = Array.from(
  new Set(
    Object.values(PLAYERS_DB)
      .flat()
      .map((p) => p.edition.toString()),
  ),
).sort((a, b) => parseInt(b) - parseInt(a));

export const ALL_POSITIONS = [...POSITIONS];

const POSITION_ORDER: Record<Position, number> = {
  GOL: 1,
  LD: 2,
  ZAG: 3,
  LE: 4,
  VOL: 5,
  MC: 6,
  MEI: 7,
  MD: 8,
  ME: 9,
  PD: 10,
  CA: 11,
  PE: 12,
};

export const TACTICS: Record<
  string,
  Record<string, Omit<FieldSlot, "player">[]>
> = {
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
      { pos: "MC", x: 50, y: 56 },
      { pos: "MC", x: 75, y: 45 },
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

export const generatePlayersForTeam = (
  team: string,
  _currentField?: FieldSlot[],
): Player[] => {
  const teamPlayers = PLAYERS_DB[team] || [];

  const pool: Player[] = teamPlayers.map((playerData) => {
    return {
      id: `${playerData.rating}-${Math.random().toString(36).substring(2, 7)}`,
      name: playerData.name,
      shortName: playerData.name,
      position: playerData.positions,
      jerseyNumber: playerData.jerseyNumber,
    } as Player;
  });

  return pool.sort((a, b) => {
    const posOrderA = POSITION_ORDER[a.position[0] as Position] || 99;
    const posOrderB = POSITION_ORDER[b.position[0] as Position] || 99;

    if (posOrderA !== posOrderB) {
      return posOrderA - posOrderB;
    }

    const numA = typeof a.jerseyNumber === "number" ? a.jerseyNumber : 99;
    const numB = typeof b.jerseyNumber === "number" ? b.jerseyNumber : 99;

    return numA - numB;
  });
};
