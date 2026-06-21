"use client";

import { useState } from "react";
import { Player, PlayerButton } from "./ui/player-button";

const playersData: Player[] = [
  { name: "Rogério Ceni", shortName: "R. Ceni", position: "GOL", x: 50, y: 88 },
  { name: "Cafu", shortName: "Cafu", position: "LD", x: 86, y: 64 },
  { name: "Gamarra", shortName: "Gamarra", position: "ZAG", x: 68, y: 75 },
  { name: "Lugano", shortName: "Lugano", position: "ZAG", x: 32, y: 75 },
  { name: "Júnior", shortName: "Júnior", position: "LE", x: 14, y: 64 },
  { name: "Pelé", shortName: "Pelé", position: "MEI", x: 25, y: 44 },
  { name: "Zanetti", shortName: "Zanetti", position: "VOL", x: 50, y: 56 },
  { name: "Riquelme", shortName: "Riquelme", position: "MC", x: 75, y: 44 },
  { name: "Neymar", shortName: "Neymar", position: "PE", x: 20, y: 24 },
  { name: "Tevez", shortName: "Tevez", position: "CA", x: 50, y: 14 },
  { name: "Gabigol", shortName: "Gabigol", position: "PD", x: 80, y: 24 },
];

export default function Landing() {
  // Estado para controlar o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFAF3] text-[#262626] font-sans selection:bg-[#BF1A1A] selection:text-[#FFFAF3] flex items-center justify-center overflow-x-hidden relative">
      <div className="max-w-350 w-full px-6 py-12 md:py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="flex flex-col space-y-8 z-10 relative">
          {/* Logo / Tag */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[#BF1A1A] rounded-sm rotate-3 flex items-center justify-center border-2 border-[#262626] shadow-[2px_2px_0px_#262626]">
              <span className="text-[#FFFAF3] font-serif font-bold text-xl leading-none -rotate-3">
                C
              </span>
            </div>
            <span className="font-bold tracking-widest uppercase text-sm border-b-2 border-[#262626] pb-1">
              Copeiro
            </span>
          </div>

          {/* Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif uppercase leading-[0.95] tracking-tighter text-[#262626]">
              Monte o{" "}
              <span className="text-[#BF1A1A] italic pr-2">maior time</span> da
              história da Libertadores
            </h1>
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#262626]/80 max-w-xl">
              Escale lendas, escolha sua tática e descubra se o seu time tem a
              mística para conquistar a América.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#BF1A1A] text-[#FFFAF3] px-8 py-4 uppercase font-black tracking-widest border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all active:scale-95">
              Começar Campanha
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFFAF3] text-[#262626] px-8 py-4 uppercase font-bold tracking-widest border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:bg-[#262626] hover:text-[#FFFAF3] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all active:scale-95"
            >
              Como Funciona
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t-2 border-[#262626]/10">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-black text-[#BF1A1A]">
                100+
              </span>
              <span className="text-xs uppercase font-bold tracking-wider mt-1">
                Jogadores
                <br />
                Históricos
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-black text-[#262626]">
                Dezenas
              </span>
              <span className="text-xs uppercase font-bold tracking-wider mt-1">
                De Times
                <br />
                Clássicos
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-black text-[#262626]">
                Infinitas
              </span>
              <span className="text-xs uppercase font-bold tracking-wider mt-1">
                Combinações
                <br />
                Táticas
              </span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Prancheta / Campo Estilizado */}
        <div className="relative w-full max-w-125 mx-auto lg:ml-auto">
          <div
            className="relative w-full aspect-3/4 border-4 border-[#262626] shadow-[8px_8px_0px_#262626] rounded-sm p-4 overflow-hidden"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                #4A7C46,
                #4A7C46 10%,
                #52854E 10%,
                #52854E 20%
              )`,
            }}
          >
            {/* Linhas do Campo */}
            <div className="absolute inset-4 border-2 border-[#FFFAF3]/60 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#FFFAF3]/60 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 border-2 border-[#FFFAF3]/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#FFFAF3]/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-[50%] h-[15%] border-b-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
              <div className="absolute top-0 left-1/2 w-[25%] h-[5%] border-b-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
              <div className="absolute top-[15%] left-1/2 w-12 h-6 border-b-2 border-x-2 border-[#FFFAF3]/60 rounded-b-full -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-[50%] h-[15%] border-t-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-[25%] h-[5%] border-t-2 border-x-2 border-[#FFFAF3]/60 -translate-x-1/2"></div>
              <div className="absolute bottom-[15%] left-1/2 w-12 h-6 border-t-2 border-x-2 border-[#FFFAF3]/60 rounded-t-full -translate-x-1/2"></div>
            </div>

            {/* Renderização dos Jogadores */}
            {playersData.map((player, idx) => (
              <PlayerButton
                key={idx}
                player={player}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(${player.x}% * 0.92 + 4%)`,
                  top: `calc(${player.y}% * 0.92 + 4%)`,
                }}
              />
            ))}
          </div>

          {/* Deco elements para parecer prancheta/jornal */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#262626] pointer-events-none hidden sm:block"></div>
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#262626] pointer-events-none hidden sm:block"></div>
        </div>
      </div>

      {/* MODAL "COMO FUNCIONA" */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Overlay Escuro */}
          <div
            className="absolute inset-0 bg-[#262626]/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Caixa do Modal */}
          <div className="bg-[#FFFAF3] border-4 border-[#262626] shadow-[8px_8px_0px_#262626] p-8 sm:p-12 max-w-3xl w-full relative z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Botão Fechar (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-[#FFFAF3] border-2 border-[#262626] shadow-[2px_2px_0px_#262626] hover:translate-y-0.5 hover:shadow-[0px_0px_0px_#262626] transition-all active:scale-95"
            >
              <span className="font-black text-xl leading-none pt-0.5 text-[#262626]">
                X
              </span>
            </button>

            <h2 className="font-serif text-3xl sm:text-5xl uppercase mb-10 text-[#262626] border-b-2 border-[#262626]/10 pb-6 pr-12">
              Regras do <span className="text-[#BF1A1A] italic">Draft</span>
            </h2>

            {/* Lista de Passos */}
            <div className="flex flex-col gap-8 sm:gap-10">
              {/* Passo 01 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <span className="font-serif text-5xl sm:text-6xl text-[#BF1A1A] font-black leading-none shrink-0 mt-1">
                  01
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl uppercase font-bold text-[#262626] mb-2">
                    Role
                  </h3>
                  <p
                    className="text-[#262626]/80 font-medium text-base sm:text-lg leading-relaxed max-w-lg"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    A roleta define o seu destino. Sorteie uma edição histórica
                    da taça, descubra qual camisa pesada você vai defender e
                    receba a sua formação tática.
                  </p>
                </div>
              </div>

              {/* Passo 02 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <span className="font-serif text-5xl sm:text-6xl text-[#BF1A1A] font-black leading-none shrink-0 mt-1">
                  02
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl uppercase font-bold text-[#262626] mb-2">
                    Monte
                  </h3>
                  <p
                    className="text-[#262626]/80 font-medium text-base sm:text-lg leading-relaxed max-w-lg"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    A responsabilidade é sua. Escale lendas, medalhões e craques
                    que honraram essa camisa na época. Monte o 11 inicial
                    perfeito para não passar vergonha.
                  </p>
                </div>
              </div>

              {/* Passo 03 */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <span className="font-serif text-5xl sm:text-6xl text-[#BF1A1A] font-black leading-none shrink-0 mt-1">
                  03
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl uppercase font-bold text-[#262626] mb-2">
                    Simule
                  </h3>
                  <p
                    className="text-[#262626]/80 font-medium text-base sm:text-lg leading-relaxed max-w-lg"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Vá para o mata-mata. Enfrente pedreiras, catimba e pressão.
                    Sobreviva à campanha e prove que o seu elenco tem a mística
                    para levantar a bendita taça!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Final do Modal */}
            <div className="mt-12 pt-8 border-t-2 border-[#262626]/10 flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#BF1A1A] text-[#FFFAF3] px-10 py-4 uppercase font-black tracking-widest border-2 border-[#262626] shadow-[4px_4px_0px_#262626] hover:translate-y-1 hover:shadow-[0px_0px_0px_#262626] transition-all active:scale-95 w-full sm:w-auto"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Entendido, Vamos Jogar!
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
