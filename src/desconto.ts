const LIMITE_DESCONTO_MEDIO = 100;
const LIMITE_DESCONTO_ALTO = 200;
const DESCONTO_MEDIO = 0.1;
const DESCONTO_ALTO = 0.2;

function obterPercentualDesconto(valor: number): number {
  if (valor >= LIMITE_DESCONTO_ALTO) return DESCONTO_ALTO;
  if (valor >= LIMITE_DESCONTO_MEDIO) return DESCONTO_MEDIO;
  return 0;
}

function arredondar(valor: number): number {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

export function calcularValorFinal(valor: number): number {
  const percentual = obterPercentualDesconto(valor);
  return arredondar(valor * (1 - percentual));
}