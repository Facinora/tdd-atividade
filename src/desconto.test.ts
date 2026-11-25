import { describe, it, expect } from "vitest";
import { calcularValorFinal } from "./desconto";

describe("Sistema de descontos", () => {
  it("não aplica desconto para compra de R$ 50", () => {
    expect(calcularValorFinal(50)).toBe(50);
  });
  it("aplica 10% de desconto para compra de R$ 100", () => {
    expect(calcularValorFinal(100)).toBe(90);
});
});