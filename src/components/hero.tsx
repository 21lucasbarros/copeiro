"use client";

import { useState, useEffect } from "react";
import TacticalField from "./tactical-field";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--grass-dark)" }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.8,
        }}
      />

      {/* Top nav bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "var(--gold)" }}
          >
            <span className="font-display text-black text-sm">LD</span>
          </div>
          <span
            className="font-sport font-semibold tracking-widest text-xs uppercase"
            style={{ color: "var(--gold)" }}
          >
            Libertadores Draft
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {["Como Funciona", "Times Históricos", "Ranking"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-sport text-xs uppercase tracking-wider transition-colors duration-200"
              style={{ color: "rgba(240,232,214,0.6)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(240,232,214,0.6)")
              }
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="font-sport text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200"
          style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--gold)";
            el.style.color = "var(--black)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.color = "var(--gold)";
          }}
        >
          Entrar
        </button>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-6 md:px-12 pt-6 pb-16 min-h-[calc(100vh-80px)]">
        {/* Left: text */}
        <div
          className="flex-1 lg:max-w-[55%]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span
              className="font-sport text-xs uppercase tracking-[0.25em]"
              style={{ color: "var(--gold)" }}
            >
              Copa Libertadores · 1960 – 2024
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-white leading-none mb-2">
            <span
              className="block text-[clamp(4rem,10vw,9rem)] tracking-tight no-select"
              style={{ color: "var(--cream)" }}
            >
              Monte o
            </span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] tracking-tight no-select shimmer-text">
              Maior Time
            </span>
            <span
              className="block text-[clamp(4rem,10vw,9rem)] tracking-tight no-select"
              style={{ color: "var(--cream)" }}
            >
              da História.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg md:text-xl mt-6 mb-8 leading-relaxed max-w-lg"
            style={{ color: "rgba(240,232,214,0.7)" }}
          >
            Escale lendas do futebol sul-americano, defina sua estratégia e
            conquiste a{" "}
            <strong style={{ color: "var(--gold)" }}>Libertadores</strong> numa
            simulação épica.
          </p>

          {/* Stats row */}
          <div
            className="flex gap-6 mb-8 pb-8"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}
          >
            {[
              { num: "64", label: "Times históricos" },
              { num: "800+", label: "Jogadores lendários" },
              { num: "60", label: "Anos de Libertadores" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display text-3xl"
                  style={{ color: "var(--gold)" }}
                >
                  {s.num}
                </div>
                <div
                  className="font-sport text-xs uppercase tracking-wider"
                  style={{ color: "rgba(240,232,214,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              className="group relative font-sport font-semibold text-sm uppercase tracking-widest px-8 py-4 overflow-hidden transition-all duration-300"
              style={{ background: "var(--red)", color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B52222";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(212,43,43,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--red)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ⚽ Começar Draft
            </button>
            <button
              className="font-sport font-medium text-sm uppercase tracking-widest px-8 py-4 border-2 transition-all duration-300"
              style={{
                borderColor: "rgba(240,232,214,0.3)",
                color: "var(--cream)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(240,232,214,0.3)";
                e.currentTarget.style.color = "var(--cream)";
              }}
            >
              Ver Como Funciona ↓
            </button>
          </div>

          {/* Small footnote */}
          <p
            className="mt-5 font-body text-xs"
            style={{ color: "rgba(240,232,214,0.35)" }}
          >
            Gratuito • Sem cadastro • Roda no navegador
          </p>
        </div>

        {/* Right: tactical field */}
        <div
          className="flex-1 flex justify-center lg:justify-end"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(20px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          <TacticalField />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}
