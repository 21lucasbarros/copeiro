"use client";

const steps = [
  {
    number: "01",
    emoji: "🎲",
    title: "Draft",
    subtitle: "Gire a Roleta",
    description:
      "Receba jogadores históricos aleatórios de elencos lendários da Libertadores — de Zico ao Gabigol, de Riquelme ao Falcão.",
    color: "var(--gold)",
    accent: "#C9A84C22",
  },
  {
    number: "02",
    emoji: "📋",
    title: "Prancheta",
    subtitle: "Monte seu Esquema",
    description:
      "Escolha sua formação tática, defina estilo de jogo e posicione cada craque no campo. Você é o treinador.",
    color: "var(--red)",
    accent: "#D42B2B22",
  },
  {
    number: "03",
    emoji: "⚽",
    title: "Libertadores",
    subtitle: "Conquiste a América",
    description:
      "Dispute fase de grupos, oitavas, quartas, semifinal e a grande final. Veja se sua seleção histórica vira lenda.",
    color: "#4CAF50",
    accent: "#4CAF5022",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 md:py-28 px-6 md:px-12"
      style={{ background: "var(--cream)" }}
    >
      {/* Top ornament */}
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="font-sport text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--red)" }}
          >
            O Jogo
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none"
            style={{ color: "var(--black)" }}
          >
            Como Funciona
          </h2>
          <div className="divider-ornament mt-4 max-w-xs mx-auto">
            <span
              className="font-headline text-sm italic"
              style={{ color: "var(--sepia)" }}
            >
              Simples. Viciante. Histórico.
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="card-hover relative overflow-hidden"
              style={{
                background: "var(--black)",
                border: `1px solid ${step.color}33`,
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-4 font-display text-7xl leading-none no-select pointer-events-none"
                style={{ color: `${step.color}18`, lineHeight: 1 }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 p-7">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded flex items-center justify-center text-2xl mb-6"
                  style={{
                    background: step.accent,
                    border: `1px solid ${step.color}44`,
                  }}
                >
                  {step.emoji}
                </div>

                {/* Tag */}
                <span
                  className="font-sport text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: step.color }}
                >
                  {step.title}
                </span>

                <h3
                  className="font-display text-2xl mt-1 mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  {step.subtitle}
                </h3>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(240,232,214,0.6)" }}
                >
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}, transparent)`,
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="text-center mt-12">
          <p
            className="font-headline italic text-lg mb-4"
            style={{ color: "var(--sepia)" }}
          >
            "Você consegue montar um elenco melhor que os campeões históricos?"
          </p>
          <button
            className="font-sport text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300"
            style={{ background: "var(--gold)", color: "var(--black)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Provar que Sim →
          </button>
        </div>
      </div>
    </section>
  );
}
