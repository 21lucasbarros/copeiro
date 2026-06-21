interface Player {
  name: string;
  shortName: string;
  position: string;
  x: number; // percentage
  y: number; // percentage
}

const players: Player[] = [
  { name: "Rogério Ceni", shortName: "R. Ceni", position: "GK", x: 50, y: 90 },
  { name: "Cafu", shortName: "Cafu", position: "LD", x: 83, y: 73 },
  { name: "Ramos", shortName: "Ramos", position: "ZAG", x: 62, y: 73 },
  { name: "Lugano", shortName: "Lugano", position: "ZAG", x: 38, y: 73 },
  { name: "Júnior", shortName: "Júnior", position: "LE", x: 17, y: 73 },
  { name: "Riquelme", shortName: "Riquelme", position: "MEI", x: 25, y: 52 },
  { name: "Zanetti", shortName: "Zanetti", position: "VOL", x: 50, y: 57 },
  { name: "D'Alessandro", shortName: "D'Ale", position: "MEI", x: 75, y: 52 },
  { name: "Neymar", shortName: "Neymar", position: "ATA", x: 20, y: 28 },
  { name: "Tevez", shortName: "Tevez", position: "CA", x: 50, y: 20 },
  { name: "Gabigol", shortName: "Gabigol", position: "ATA", x: 80, y: 28 },
];

export default function TacticalField() {
  return (
    <div className="relative" style={{ width: "320px", maxWidth: "90vw" }}>
      {/* Trophy shimmer label */}
      <div
        className="text-center mb-3 font-sport text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--gold)" }}
      >
        ★ Seleção dos Sonhos ★
      </div>

      {/* Field card wrapper */}
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          border: "2px solid var(--gold)",
          boxShadow:
            "0 0 40px rgba(201,168,76,0.25), inset 0 0 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Field SVG */}
        <svg
          viewBox="0 0 320 480"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          {/* Grass stripes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="0"
              y={i * 60}
              width="320"
              height="60"
              fill={i % 2 === 0 ? "#1A3A1A" : "#1E4020"}
            />
          ))}

          {/* Field lines */}
          <g stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.7">
            {/* Outer border */}
            <rect x="16" y="16" width="288" height="448" />
            {/* Center line */}
            <line x1="16" y1="240" x2="304" y2="240" />
            {/* Center circle */}
            <circle cx="160" cy="240" r="44" />
            <circle cx="160" cy="240" r="2" fill="#4CAF50" />
            {/* Penalty areas */}
            <rect x="80" y="16" width="160" height="62" />
            <rect x="80" y="402" width="160" height="62" />
            {/* Goal areas */}
            <rect x="114" y="16" width="92" height="28" />
            <rect x="114" y="436" width="92" height="28" />
            {/* Goals */}
            <rect
              x="126"
              y="10"
              width="68"
              height="10"
              strokeWidth="2"
              stroke="#FFD700"
              fill="none"
            />
            <rect
              x="126"
              y="460"
              width="68"
              height="10"
              strokeWidth="2"
              stroke="#FFD700"
              fill="none"
            />
            {/* Penalty spots */}
            <circle cx="160" cy="94" r="2" fill="#4CAF50" />
            <circle cx="160" cy="386" r="2" fill="#4CAF50" />
            {/* Corner arcs */}
            <path d="M16,36 A20,20 0 0,1 36,16" />
            <path d="M284,16 A20,20 0 0,1 304,36" />
            <path d="M16,444 A20,20 0 0,0 36,464" />
            <path d="M304,444 A20,20 0 0,0 284,464" />
          </g>

          {/* Players */}
          {players.map((player) => {
            const cx = (player.x / 100) * 320;
            const cy = (player.y / 100) * 480;
            return (
              <g key={player.name}>
                {/* Shadow */}
                <ellipse
                  cx={cx}
                  cy={cy + 22}
                  rx="16"
                  ry="4"
                  fill="rgba(0,0,0,0.3)"
                />
                {/* Circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="19"
                  fill="#F0E8D6"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
                />
                {/* Position label (small top) */}
                <text
                  x={cx}
                  y={cy - 7}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="6"
                  fontFamily="Oswald, sans-serif"
                  fontWeight="600"
                  fill="#D42B2B"
                >
                  {player.position}
                </text>
                {/* Name */}
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7.5"
                  fontFamily="Oswald, sans-serif"
                  fontWeight="700"
                  fill="#1C1C1C"
                >
                  {player.shortName.length > 7
                    ? player.shortName.slice(0, 7)
                    : player.shortName}
                </text>
                {/* Hover area (invisible) */}
                <circle cx={cx} cy={cy} r="19" fill="transparent" />
              </g>
            );
          })}
        </svg>

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      {/* Formation label */}
      <div
        className="text-center mt-3 font-display text-lg tracking-widest"
        style={{ color: "rgba(201,168,76,0.6)" }}
      >
        4 — 3 — 3
      </div>
    </div>
  );
}
