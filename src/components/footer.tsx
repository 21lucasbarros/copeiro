"use client";

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6 md:px-12"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo area */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--gold)" }}
            >
              <span className="font-display text-black text-sm">LD</span>
            </div>
            <div>
              <div
                className="font-display text-base"
                style={{ color: "var(--cream)" }}
              >
                Libertadores Draft
              </div>
              <div
                className="font-sport text-[10px] uppercase tracking-widest"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                Copa Libertadores · 1960–2024
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {["Como Funciona", "Times", "Ranking", "Privacidade"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="font-sport text-xs uppercase tracking-wider transition-colors duration-200"
                  style={{ color: "rgba(240,232,214,0.35)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(240,232,214,0.35)")
                  }
                >
                  {link}
                </a>
              ),
            )}
          </div>

          {/* Rights */}
          <div
            className="font-body text-xs text-center md:text-right"
            style={{ color: "rgba(240,232,214,0.2)" }}
          >
            Projeto fan-made. Não afiliado à CONMEBOL.
            <br />
            Feito com ⚽ e nostalgia.
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
        >
          <p
            className="font-sport text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(240,232,214,0.15)" }}
          >
            Libertadores Draft · libertadoresdraft.com · Draft · Prancheta ·
            Simulate · Conquiste
          </p>
        </div>
      </div>
    </footer>
  );
}
