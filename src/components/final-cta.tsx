"use client";

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      style={{ background: "var(--grass-dark)" }}
    >
      {/* Grass stripe background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            180deg,
            #0F2010 0px, #0F2010 60px,
            #122514 60px, #122514 120px
          )`,
          opacity: 0.8,
        }}
      />

      {/* Gold glow radial */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Field center circle decoration */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          border: "1.5px solid rgba(75,170,75,0.2)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "8px",
          height: "8px",
          background: "rgba(75,170,75,0.3)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Trophy icon */}
        <div className="text-5xl mb-6 animate-pulse-gold inline-block">🏆</div>

        {/* Tag */}
        <p
          className="font-sport text-xs uppercase tracking-[0.4em] mb-4"
          style={{ color: "var(--gold)" }}
        >
          O Desafio Final
        </p>

        {/* Main title */}
        <h2
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-none mb-6"
          style={{ color: "var(--cream)" }}
        >
          Você Consegue
          <br />
          <span className="shimmer-text">Montar um Time</span>
          <br />
          Melhor?
        </h2>

        <p
          className="font-body text-lg mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(240,232,214,0.6)" }}
        >
          Gire a roleta, escale seus craques e prove que sua seleção é a maior
          da história da Libertadores.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="font-sport font-semibold text-base uppercase tracking-widest px-12 py-5 transition-all duration-300 w-full sm:w-auto"
            style={{
              background: "var(--gold)",
              color: "var(--black)",
              boxShadow: "0 4px 24px rgba(201,168,76,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(201,168,76,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(201,168,76,0.4)";
            }}
          >
            ⚽ Jogar Agora
          </button>
          <button
            className="font-sport text-sm uppercase tracking-widest px-8 py-5 border-2 transition-all duration-300 w-full sm:w-auto"
            style={{
              borderColor: "rgba(240,232,214,0.2)",
              color: "rgba(240,232,214,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,232,214,0.5)";
              e.currentTarget.style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,232,214,0.2)";
              e.currentTarget.style.color = "rgba(240,232,214,0.6)";
            }}
          >
            🎲 Draft Rápido
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          {[
            { num: "12.400", label: "Drafts jogados" },
            { num: "94%", label: "Querem a revanche" },
            { num: "∞", label: "Combinações possíveis" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display text-2xl"
                style={{ color: "var(--gold)" }}
              >
                {s.num}
              </div>
              <div
                className="font-sport text-[10px] uppercase tracking-wider"
                style={{ color: "rgba(240,232,214,0.35)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
