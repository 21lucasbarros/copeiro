"use client";

export default function ShareCard() {
  return (
    <section
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* Diagonal gold accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-sport text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--gold)" }}
          >
            Card Final
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none"
            style={{ color: "var(--cream)" }}
          >
            Compartilhe sua Glória
          </h2>
          <p
            className="font-body text-sm mt-3"
            style={{ color: "rgba(240,232,214,0.4)" }}
          >
            Ao fim de cada Libertadores, você recebe um card único para guardar
            e compartilhar
          </p>
        </div>

        {/* Card mockup */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md"
            style={{
              background: "var(--cream)",
              border: "3px solid var(--gold)",
              boxShadow:
                "0 0 60px rgba(201,168,76,0.3), 8px 8px 0 rgba(201,168,76,0.15)",
              fontFamily: "Georgia, serif",
            }}
          >
            {/* Newspaper header */}
            <div
              className="px-6 py-4 text-center"
              style={{
                borderBottom: "3px double var(--black)",
                background: "var(--cream)",
              }}
            >
              <div
                className="font-sport text-[10px] uppercase tracking-[0.4em] mb-1"
                style={{ color: "var(--sepia)" }}
              >
                Edição Especial · Libertadores Draft
              </div>
              <div
                className="font-display text-4xl tracking-tight"
                style={{ color: "var(--black)" }}
              >
                La Copa es Nuestra
              </div>
              <div
                className="font-sport text-[10px] uppercase tracking-[0.3em] mt-1"
                style={{ color: "var(--sepia)" }}
              >
                Copa Libertadores da América · 2024
              </div>
            </div>

            {/* Main content */}
            <div className="p-6">
              {/* Banner title */}
              <div
                className="text-center py-3 mb-4"
                style={{ background: "var(--black)" }}
              >
                <span
                  className="font-display text-2xl tracking-widest"
                  style={{ color: "var(--gold)" }}
                >
                  ★ CAMPEÃO DA AMÉRICA ★
                </span>
              </div>

              {/* Final result */}
              <div className="text-center mb-5">
                <div
                  className="font-headline text-lg font-bold mb-2"
                  style={{ color: "var(--black)" }}
                >
                  Grande Final — Buenos Aires
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div
                      className="font-display text-xl"
                      style={{ color: "var(--black)" }}
                    >
                      Sua Seleção
                    </div>
                    <div
                      className="font-sport text-xs uppercase"
                      style={{ color: "var(--sepia)" }}
                    >
                      Vencedor
                    </div>
                  </div>
                  <div
                    className="font-display text-4xl px-4 py-1"
                    style={{
                      color: "var(--black)",
                      background: "var(--cream-dark)",
                      border: "1px solid var(--sepia)",
                    }}
                  >
                    3 – 1
                  </div>
                  <div className="text-center">
                    <div
                      className="font-display text-xl"
                      style={{ color: "var(--sepia)" }}
                    >
                      River 2018
                    </div>
                    <div
                      className="font-sport text-xs uppercase"
                      style={{ color: "var(--sepia)" }}
                    >
                      Finalista
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="my-4 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--sepia), transparent)",
                }}
              />

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                {[
                  { label: "Artilheiro", value: "Neymar", sub: "7 gols" },
                  { label: "Melhor Jog.", value: "Riquelme", sub: "Nota 9.4" },
                  { label: "Formação", value: "4-3-3", sub: "Ataque Total" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="py-2 px-1"
                    style={{
                      background: "var(--cream-dark)",
                      border: "1px solid rgba(139,115,85,0.2)",
                    }}
                  >
                    <div
                      className="font-sport text-[9px] uppercase tracking-wider mb-1"
                      style={{ color: "var(--sepia)" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="font-display text-sm"
                      style={{ color: "var(--black)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="font-body text-[10px]"
                      style={{ color: "var(--sepia)" }}
                    >
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lineup mini */}
              <div
                className="p-3"
                style={{
                  background: "var(--cream-dark)",
                  border: "1px solid rgba(139,115,85,0.2)",
                }}
              >
                <div
                  className="font-sport text-[9px] uppercase tracking-[0.2em] text-center mb-2"
                  style={{ color: "var(--sepia)" }}
                >
                  Escalação Titular
                </div>
                <div
                  className="font-body text-xs text-center leading-relaxed"
                  style={{ color: "var(--black)" }}
                >
                  R. Ceni · Cafu · Ramos · Lugano · Júnior
                  <br />
                  Riquelme · Zanetti · D'Alessandro
                  <br />
                  Neymar · Tevez · Gabigol
                </div>
              </div>

              {/* Stamp effect */}
              <div
                className="absolute bottom-16 right-6 rotate-12 opacity-25 pointer-events-none"
                style={{
                  border: "3px solid var(--red)",
                  color: "var(--red)",
                  padding: "4px 10px",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "22px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  whiteSpace: "nowrap",
                }}
              >
                CAMPEÃO
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-6 py-3 text-center"
              style={{
                borderTop: "2px solid var(--black)",
                background: "var(--cream)",
              }}
            >
              <span
                className="font-sport text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "var(--sepia)" }}
              >
                libertadoresdraft.com · Gerado em 2024
              </span>
            </div>
          </div>
        </div>

        {/* Share CTA */}
        <div className="text-center mt-10">
          <p
            className="font-headline italic text-base mb-4"
            style={{ color: "rgba(240,232,214,0.5)" }}
          >
            Cada campanha gera um card único com seu elenco e campanha
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["🐦 Twitter", "📸 Instagram", "💬 WhatsApp"].map((s) => (
              <button
                key={s}
                className="font-sport text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200"
                style={{
                  borderColor: "rgba(201,168,76,0.3)",
                  color: "rgba(240,232,214,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                  e.currentTarget.style.color = "rgba(240,232,214,0.6)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
