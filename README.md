# Prática de TDD: TypeScript + Vitest

**Aluno:** JOÃO CARLOS BAIA VAZ

**Disciplina:** Engenharia de Software

**Professor:** JONATHAS WALBERT LACERDA DA ROCHA DE SOUZA

## Descrição
Três desafios resolvidos com Test-Driven Development (Red, Green, Refactor):
1. Calculadora de operações (`src/calculadora.ts`)
2. Sistema de descontos (`src/desconto.ts`)
3. Cálculo de frete (`src/frete.ts`)

## Pré-requisitos
- Node.js 20 ou superior
- npm

## Instalação
    npm install

## Executar os testes
    npm test

Modo observação (re-executa ao salvar):
    npm run test:watch

## Estrutura
    src/
      calculadora.ts / calculadora.test.ts
      desconto.ts    / desconto.test.ts
      frete.ts       / frete.test.ts

## Ciclo TDD
O histórico de commits segue os prefixos `test:` (Red), `feat:` (Green) e `refactor:` (Refactor).

## Observação pessoal
A atividade foi feita no BazziteOS, um sistema imutável, portanto foi necessário rodar o VS Code em flatpak, por causa disso ele não enxergava o Node no nvm. Por isso, utilizei o VS Code apenas para editar os arquivos, e utilizei um terminal do próprio computador para rodar npm test e os comandos git.
