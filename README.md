# Copeiro

> Um simulador de futebol para navegador inspirado na nostalgia do futebol sul-americano. Monte seu time histórico, escolha sua estratégia e tente sobreviver ao caos de uma campanha continental.

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Stack](https://img.shields.io/badge/Stack-Next.js_|_Tailwind_|_Zustand-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Sobre o projeto

O **Copeiro** é um jogo de navegador focado em gerenciamento, estratégia e nostalgia. A ideia nasceu da vontade de recriar aquela sensação dos antigos jogos em Flash e dos almanaques de futebol: montar um elenco, escolher uma formação e acompanhar uma campanha cheia de histórias inesperadas.

O jogador assume o papel de treinador de uma equipe, monta seu onze inicial com jogadores de times históricos do futebol sul-americano e disputa uma competição completa em busca do título.

Para evitar o uso de propriedades oficiais, os clubes são representados por nomes inspirados em suas histórias, como *Tricolor Paulista 2005* ou *Rubro-Negro Carioca 1981*.

## Funcionalidades

### Draft histórico

Monte seu elenco escolhendo jogadores de equipes lendárias. Cada escolha influencia a força final do time, calculada através dos atributos individuais dos jogadores.

### Táticas e estilos de jogo

Defina como sua equipe vai jogar escolhendo:

* Formações clássicas como 4-3-3, 3-5-2 e 4-4-2
* Estilo de jogo entre defensivo, equilibrado e ofensivo

Suas decisões influenciam diretamente os confrontos durante a campanha.

### Modos de jogo

**Clássico**

Tenha acesso aos atributos dos jogadores durante a montagem do time e monte sua equipe buscando o melhor desempenho possível.

**Almanaque**

Uma experiência baseada em conhecimento histórico. Os atributos ficam escondidos e você precisa confiar na memória para montar o elenco.

### Sistema de simulação

A engine do jogo simula uma campanha completa:

* Fase de grupos em formato de mini-liga
* Classificação através de pontos e saldo de gols
* Mata-mata com partidas decisivas
* Disputas por pênaltis
* Geração de resultados e autores dos gols

A ideia é criar aquele clima imprevisível dos torneios sul-americanos, onde favoritismo nem sempre garante vitória.

### Card final da campanha

Ao terminar uma campanha, o jogo gera um resumo visual com os principais dados da trajetória:

* Campanha geral
* Vitórias, derrotas e empates
* Gols marcados e sofridos
* Escalação escolhida

O objetivo é transformar cada campanha em uma história compartilhável.

## Tecnologias utilizadas

O projeto foi pensado para rodar totalmente no navegador, deixando toda a lógica de simulação no lado do cliente.

* **Frontend:** Next.js (App Router) + React
* **Estilização:** Tailwind CSS
* **Gerenciamento de estado:** Zustand
* **Geração de imagens:** @vercel/og
* **Hospedagem:** Vercel

## Como rodar localmente

Clone o projeto:

```bash
git clone https://github.com/21lucasbarros/copeiro.git
cd copeiro
```

Instale as dependências:

```bash
npm install
```

ou

```bash
bun install
```

Execute o projeto:

```bash
npm run dev
```

ou

```bash
bun run dev
```

O projeto estará disponível em:

```
http://localhost:3000
```

## Como funciona a simulação

A engine funciona totalmente no navegador e utiliza uma fórmula baseada em alguns fatores:

* Overall médio do time
* Qualidade do elenco escolhido
* Compatibilidade da formação
* Estilo de jogo
* Fator aleatório para representar zebras e momentos inesperados

A intenção não é criar uma simulação totalmente previsível, mas sim reproduzir o sentimento de uma competição onde qualquer coisa pode acontecer.

## Aviso legal

O Copeiro é um projeto independente feito como homenagem ao futebol sul-americano.

Nenhum escudo, nome oficial de clube, marca registrada ou propriedade intelectual de entidades esportivas é utilizado. Times e jogadores são representados através de nomes genéricos, referências históricas ou adaptações criadas exclusivamente para fins de entretenimento.

Feito por Lucas Barros Simon.
