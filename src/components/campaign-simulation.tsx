const matchResults = [
  {
    home: "Sua Seleção",
    homeScore: 3,
    away: "Boca Juniors 2001",
    awayScore: 1,
    phase: "Grupos",
  },
  {
    home: "Sua Seleção",
    homeScore: 2,
    away: "River Plate 2018",
    awayScore: 2,
    phase: "Grupos",
  },
  {
    home: "Santos 1962",
    homeScore: 0,
    away: "Sua Seleção",
    awayScore: 1,
    phase: "Grupos",
  },
  {
    home: "Sua Seleção",
    homeScore: 4,
    away: "Peñarol 1966",
    awayScore: 0,
    phase: "Oitavas",
  },
  {
    home: "Flamengo 2019",
    homeScore: 1,
    away: "Sua Seleção",
    awayScore: 2,
    phase: "Quartas",
  },
];

const stats = [
  { label: "Gols Marcados", value: "12", icon: "⚽" },
  { label: "Gols Sofridos", value: "4", icon: "🥅" },
  { label: "Artilheiro", value: "Neymar · 5", icon: "👑" },
  { label: "Melhor Nota", value: "Riquelme · 9.2", icon: "⭐" },
];

const bracket = [
  { label: "Grupos", done: true },
  { label: "Oitavas", done: true },
  { label: "Quartas", done: true },
  { label: "Semi", done: false },
  { label: "Final", done: false },
];

export default function CampaignSimulation() {
  return (
    <section
      className="relative py-20 md:py-28 px-6 md:px-12"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-sport text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--red)" }}
          >
            Simulação
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none"
            style={{ color: "var(--black)" }}
          >
            Sua Campanha
          </h2>
          <p
            className="font-body text-sm mt-3"
            style={{ color: "var(--sepia)" }}
          >
            Acompanhe resultado a resultado até a grande final
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: results */}
          <div>
            {/* Phase progress */}
            <div
              className="mb-6 p-4 flex items-center justify-between"
              style={{
                background: "var(--black)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {bracket.map((phase, i) => (
                <div key={phase.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition-all duration-300"
                      style={{
                        background: phase.done
                          ? "var(--gold)"
                          : "rgba(240,232,214,0.1)",
                        color: phase.done
                          ? "var(--black)"
                          : "rgba(240,232,214,0.3)",
                        border: phase.done
                          ? "none"
                          : "1px solid rgba(240,232,214,0.2)",
                      }}
                    >
                      {phase.done ? "✓" : ""}
                    </div>
                    <span
                      className="font-sport text-[9px] uppercase"
                      style={{
                        color: phase.done
                          ? "var(--gold)"
                          : "rgba(240,232,214,0.3)",
                      }}
                    >
                      {phase.label}
                    </span>
                  </div>
                  {i < bracket.length - 1 && (
                    <div
                      className="w-8 h-px mx-1 mb-4"
                      style={{
                        background: phase.done
                          ? "var(--gold)"
                          : "rgba(240,232,214,0.15)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Match results */}
            <div className="space-y-2">
              {matchResults.map((match, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{
                    background: "var(--black)",
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}
                >
                  {/* Phase label */}
                  <div
                    className="absolute top-0 left-0 px-2 py-0.5 font-sport text-[9px] uppercase tracking-wider"
                    style={{
                      background:
                        match.phase === "Grupos"
                          ? "var(--sepia)"
                          : "var(--red)",
                      color: "white",
                    }}
                  >
                    {match.phase}
                  </div>

                  <div className="flex items-center pt-5 pb-3 px-4 gap-3">
                    {/* Home */}
                    <div className="flex-1 text-right">
                      <span
                        className="font-sport text-sm font-semibold"
                        style={{
                          color:
                            match.home === "Sua Seleção"
                              ? "var(--gold)"
                              : "rgba(240,232,214,0.7)",
                        }}
                      >
                        {match.home}
                      </span>
                    </div>

                    {/* Score */}
                    <div
                      className="flex items-center gap-1 font-display text-xl px-3 py-1"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        color: "var(--cream)",
                        minWidth: "72px",
                        justifyContent: "center",
                      }}
                    >
                      <span>{match.homeScore}</span>
                      <span
                        style={{
                          color: "rgba(240,232,214,0.3)",
                          fontSize: "14px",
                        }}
                      >
                        ×
                      </span>
                      <span>{match.awayScore}</span>
                    </div>

                    {/* Away */}
                    <div className="flex-1">
                      <span
                        className="font-sport text-sm font-semibold"
                        style={{
                          color:
                            match.away === "Sua Seleção"
                              ? "var(--gold)"
                              : "rgba(240,232,214,0.7)",
                        }}
                      >
                        {match.away}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats & artilheiro */}
          <div className="space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 card-hover"
                  style={{
                    background: "var(--black)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div
                    className="font-display text-2xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-sport text-[10px] uppercase tracking-wider mt-0.5"
                    style={{ color: "rgba(240,232,214,0.4)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Next match callout */}
            <div
              className="p-5 relative overflow-hidden"
              style={{
                background: "var(--grass-mid)",
                border: "1px solid var(--gold)",
              }}
            >
              <div className="absolute -top-4 -right-4 font-display text-8xl opacity-10 text-white no-select">
                ⚔
              </div>
              <p
                className="font-sport text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--gold)" }}
              >
                Próximo Jogo — Semifinal
              </p>
              <h4 className="font-display text-xl text-white mb-1">
                Sua Seleção vs River Plate 2018
              </h4>
              <p
                className="font-body text-xs"
                style={{ color: "rgba(240,232,214,0.5)" }}
              >
                Vencedor enfrenta o campeão do Grupo B na Grande Final
              </p>
              <button
                className="mt-4 font-sport text-xs uppercase tracking-widest px-6 py-2.5 transition-all"
                style={{ background: "var(--red)", color: "white" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#B52222")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--red)")
                }
              >
                Simular Partida →
              </button>
            </div>

            {/* Formation display mini */}
            <div
              className="p-4"
              style={{
                background: "var(--black)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                className="font-sport text-xs uppercase tracking-widest mb-2"
                style={{ color: "rgba(201,168,76,0.6)" }}
              >
                Estilo de Jogo
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="font-display text-3xl"
                  style={{ color: "var(--gold)" }}
                >
                  4-3-3
                </div>
                <div>
                  <div className="font-body text-sm text-white">
                    Ataque Total
                  </div>
                  <div
                    className="font-sport text-[10px] uppercase"
                    style={{ color: "rgba(240,232,214,0.4)" }}
                  >
                    Pressão alta · Posse de bola
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
