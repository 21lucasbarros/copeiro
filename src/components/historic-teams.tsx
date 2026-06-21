"use client";

import { useState } from "react";

interface Team {
  name: string;
  year: string;
  country: string;
  flag: string;
  color: string;
  accent: string;
  rating: number;
  titles: number;
  star: string;
}

const teams: Team[] = [
  {
    name: "Santos FC",
    year: "1962–63",
    country: "Brasil",
    flag: "🇧🇷",
    color: "#1C1C1C",
    accent: "#F0E8D6",
    rating: 98,
    titles: 2,
    star: "Pelé",
  },
  {
    name: "Independiente",
    year: "1972–75",
    country: "Argentina",
    flag: "🇦🇷",
    color: "#C41E3A",
    accent: "#F0E8D6",
    rating: 91,
    titles: 4,
    star: "El Rojo",
  },
  {
    name: "Flamengo",
    year: "2019",
    country: "Brasil",
    flag: "🇧🇷",
    color: "#CC0000",
    accent: "#1C1C1C",
    rating: 96,
    titles: 1,
    star: "Gabigol",
  },
  {
    name: "River Plate",
    year: "2018",
    country: "Argentina",
    flag: "🇦🇷",
    color: "#CC0000",
    accent: "#F0F0F0",
    rating: 94,
    titles: 4,
    star: "Quintero",
  },
  {
    name: "São Paulo FC",
    year: "2005",
    country: "Brasil",
    flag: "🇧🇷",
    color: "#C41E3A",
    accent: "#F0E8D6",
    rating: 90,
    titles: 3,
    star: "Lugano",
  },
  {
    name: "Boca Juniors",
    year: "2000–01",
    country: "Argentina",
    flag: "🇦🇷",
    color: "#002D9C",
    accent: "#FFD700",
    rating: 93,
    titles: 6,
    star: "Riquelme",
  },
  {
    name: "Atl. Nacional",
    year: "1989",
    country: "Colômbia",
    flag: "🇨🇴",
    color: "#006400",
    accent: "#F0F0F0",
    rating: 88,
    titles: 2,
    star: "El Verde",
  },
  {
    name: "Peñarol",
    year: "1966",
    country: "Uruguai",
    flag: "🇺🇾",
    color: "#1C1C1C",
    accent: "#FFD700",
    rating: 87,
    titles: 5,
    star: "Spencer",
  },
  {
    name: "Palmeiras",
    year: "2020–21",
    country: "Brasil",
    flag: "🇧🇷",
    color: "#006400",
    accent: "#F0F0F0",
    rating: 92,
    titles: 3,
    star: "Dudu",
  },
  {
    name: "Estudiantes",
    year: "1968–70",
    country: "Argentina",
    flag: "🇦🇷",
    color: "#003087",
    accent: "#F0E8D6",
    rating: 89,
    titles: 3,
    star: "Verón",
  },
];

function TeamCard({ team, idx }: { team: Team; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 cursor-pointer select-none"
      style={{
        width: "180px",
        transform: hovered
          ? "translateY(-10px) rotate(-1deg) scale(1.04)"
          : "none",
        transition: "transform 0.3s ease",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sticker card */}
      <div
        className="figurinha overflow-hidden"
        style={{
          background: team.color,
          border: `3px solid ${hovered ? "var(--gold)" : "rgba(201,168,76,0.3)"}`,
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.4)"
            : "0 4px 16px rgba(0,0,0,0.3)",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Sticker number */}
        <div
          className="absolute top-2 left-2 font-display text-xs z-20"
          style={{ color: `${team.accent}80` }}
        >
          #{String(idx + 1).padStart(3, "0")}
        </div>

        {/* Country flag */}
        <div className="absolute top-2 right-2 text-sm z-20">{team.flag}</div>

        {/* Shield area */}
        <div
          className="h-28 flex items-center justify-center relative overflow-hidden"
          style={{ background: `${team.color}` }}
        >
          {/* Decorative circles behind shield */}
          <div
            className="absolute w-24 h-24 rounded-full opacity-10"
            style={{ background: team.accent }}
          />
          {/* Simplified shield SVG */}
          <svg
            width="64"
            height="72"
            viewBox="0 0 64 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 4 L58 14 L58 36 Q58 58 32 68 Q6 58 6 36 L6 14 Z"
              fill={`${team.accent}22`}
              stroke={team.accent}
              strokeWidth="2"
            />
            <text
              x="32"
              y="38"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontFamily="Bebas Neue, cursive"
              fill={team.accent}
              letterSpacing="0.5"
            >
              {team.name.split(" ")[0].toUpperCase()}
            </text>
            {team.name.split(" ")[1] && (
              <text
                x="32"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fontFamily="Bebas Neue, cursive"
                fill={team.accent}
              >
                {team.name.split(" ").slice(1).join(" ").toUpperCase()}
              </text>
            )}
          </svg>
        </div>

        {/* Info section */}
        <div
          className="px-3 py-3"
          style={{
            background: "var(--black)",
            borderTop: `2px solid ${team.accent}33`,
          }}
        >
          <div
            className="font-display text-sm leading-tight"
            style={{ color: "var(--cream)" }}
          >
            {team.name}
          </div>
          <div
            className="font-sport text-xs mt-0.5"
            style={{ color: "var(--gold)" }}
          >
            {team.year}
          </div>

          {/* Divider */}
          <div
            className="my-2 h-px"
            style={{ background: `${team.accent}30` }}
          />

          {/* Stats */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div
                className="font-display text-lg"
                style={{
                  color:
                    team.accent === "#F0E8D6" || team.accent === "#F0F0F0"
                      ? "var(--gold)"
                      : team.accent,
                }}
              >
                {team.rating}
              </div>
              <div
                className="font-sport text-[9px] uppercase"
                style={{ color: "rgba(240,232,214,0.4)" }}
              >
                OVR
              </div>
            </div>
            <div className="text-center">
              <div
                className="font-display text-lg"
                style={{ color: "var(--gold)" }}
              >
                {"★".repeat(Math.min(team.titles, 4))}
                {team.titles > 4 && `+${team.titles - 4}`}
              </div>
              <div
                className="font-sport text-[9px] uppercase"
                style={{ color: "rgba(240,232,214,0.4)" }}
              >
                Títulos
              </div>
            </div>
          </div>

          {/* Star player */}
          <div
            className="mt-2 px-2 py-1 text-center font-sport text-[10px] uppercase tracking-wider"
            style={{
              background: `${team.accent}15`,
              border: `1px solid ${team.accent}30`,
              color: "rgba(240,232,214,0.7)",
            }}
          >
            ⭐ {team.star}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HistoricTeams() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--grass-dark)" }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <p
            className="font-sport text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--gold)" }}
          >
            Coleção
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none"
            style={{ color: "var(--cream)" }}
          >
            Times Históricos
          </h2>
          <p
            className="font-body text-sm mt-3 max-w-md mx-auto"
            style={{ color: "rgba(240,232,214,0.5)" }}
          >
            Elencos lendários que escreveram a história da maior competição
            sul-americana
          </p>
        </div>

        {/* Scrollable cards */}
        <div
          className="flex gap-5 px-8 pb-6 overflow-x-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--gold) transparent",
          }}
        >
          {teams.map((team, idx) => (
            <TeamCard key={team.name + team.year} team={team} idx={idx} />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-4">
          <span
            className="font-sport text-xs uppercase tracking-widest"
            style={{ color: "rgba(201,168,76,0.4)" }}
          >
            ← Arraste para ver mais →
          </span>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-10 mx-6 py-6 max-w-xl mx-auto"
          style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
        >
          <p
            className="font-headline italic text-base mb-3"
            style={{ color: "var(--gold)" }}
          >
            64 times disponíveis — de 1960 a 2024
          </p>
          <button
            className="font-sport text-xs uppercase tracking-widest px-6 py-3 border transition-all duration-300"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Ver Todos os Times
          </button>
        </div>
      </div>
    </section>
  );
}
