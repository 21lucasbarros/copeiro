# 🏆 Copeiro

> O simulador de navegador definitivo para os saudosistas do futebol sul-americano. Monte seu esquadrão histórico, defina sua tática e sobreviva ao caos do mata-mata continental.

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Stack](https://img.shields.io/badge/Stack-Next.js_|_Tailwind_|_Zustand-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Sobre o Projeto

O **Copeiro** é um jogo casual de navegador focado em gerenciamento rápido e nostalgia. Inspirado nos clássicos jogos em Flash e almanaques esportivos, o jogador assume a prancheta de um time, sorteia jogadores de elencos lendários do continente sul-americano (com nomes adaptados para evitar problemas de direitos autorais, ex: _Tricolor Paulista 2005_, _Rubro-Negro Carioca 1981_) e simula uma campanha completa rumo à glória eterna.

## ✨ Funcionalidades Principais

- **🎲 Draft Histórico:** Role os dados e monte seus 11 titulares selecionando jogadores de equipes históricas. O _overall_ (força) do seu time é calculado com base nas suas escolhas.
- **📋 Táticas e Estilos:** Escolha entre formações clássicas (4-3-3, 3-5-2, 4-4-2) e defina a postura do time (Retranca, Equilibrado, Ofensivo).
- **⚙️ Modos de Jogo:**
  - _Clássico:_ Veja os atributos de todos os jogadores na hora de montar o time.
  - _Almanaque:_ Jogue às cegas, baseando-se apenas no seu conhecimento histórico. Os atributos só são revelados no fim.
- **⚽ Motor de Simulação Completo:**
  - **Fase de Grupos:** Simulação de 3 partidas rápidas (ida) em um formato de mini-liga, calculando pontos e saldo de gols para classificar ao mata-mata.
  - **Mata-Mata (Oitavas até a Final):** A verdadeira tensão sul-americana. Jogos decisivos com simulação de autores dos gols e decisões por pênaltis.
- **📸 Geração de Card Final (Shareable):** Ao final da campanha, o jogo gera um "Box Score" estilizado (estilo jornal esportivo retrô) contendo o placar da campanha (ex: _5 Vitórias, 1 Derrota_), gols pró/sofridos e a lista de jogadores selecionados para facilitar o compartilhamento no Twitter e WhatsApp.

## 🛠️ Stack Tecnológica

O projeto foi desenhado com foco em performance no _client-side_ (zero custo de servidor para as simulações matemáticas) e viralização orgânica:

- **Front-end:** [Next.js (App Router)](https://nextjs.org/) + [React](https://react.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Interface responsiva, minimalista e com temática retrô/almanaque)
- **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand) (Controle do fluxo de telas: Draft -> Grupos -> Mata-Mata -> Resultados, mantendo o estado da simulação sem re-renders desnecessários)
- **Geração de Imagem (Open Graph):** `@vercel/og` (Para gerar thumbnails dinâmicas dos resultados ao compartilhar links)
- **Hospedagem:** [Vercel](https://vercel.com/) (Edge network para carregamento instantâneo)

## 🚀 Como rodar localmente

Siga os passos abaixo para rodar o jogo na sua máquina:

### 1. Clone o repositório

```bash
git clone https://github.com/21lucasbarros/copeiro.git
cd copeiro
```

### 2. Instale as dependências

Você pode usar npm, yarn, pnpm ou bun:

```bash
npm install
# ou
bun install
```

### 3. Rode o servidor de desenvolvimento

```bash
npm run dev
# ou
bun run dev
```

O jogo estará disponível em http://localhost:3000.

## 🧠 Arquitetura e Lógica de Simulação

A engine de jogo roda 100% no navegador do cliente (Client-Side). A probabilidade de vitória de uma equipe contra a outra em um jogo de mata-mata é calculada através de uma fórmula matemática pura que leva em consideração:

- O Overall médio dos 11 titulares.
- A sinergia da tática escolhida contra a tática gerada automaticamente para o adversário da CPU.
- Fator de aleatoriedade (RNG) para emular as famosas "zebras" e o peso da camisa.

## ⚖️ Aviso Legal (Disclaimer)

Este é um projeto de fã feito como homenagem à história do futebol sul-americano. Nenhum nome, escudo, marca registrada ou propriedade intelectual oficial da CONMEBOL, CBF ou clubes oficiais é utilizado neste jogo. Todos os times e atletas fazem uso de nomes genéricos, paródias ou associações geográficas de domínio público.

Feito com ☕ e sofrimento futebolístico por Lucas Barros Simon.
