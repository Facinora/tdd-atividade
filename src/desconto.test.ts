import { describe, it, expect } from "vitest";
import { calcularValorFinal } from "./desconto";

describe("Sistema de descontos", () => {
  it("não aplica desconto para compra de R$ 50", () => {
    expect(calcularValorFinal(50)).toBe(50);
  });
  it("aplica 10% de desconto para compra de R$ 100", () => {
    expect(calcularValorFinal(100)).toBe(90);
});
    it("aplica 10% de desconto para compra de R$ 150", () => {
    expect(calcularValorFinal(150)).toBe(135);
});
    it("aplica 20% de desconto para compra de R$ 200", () => {
    expect(calcularValorFinal(200)).toBe(160);
});

    it("aplica 20% de desconto para compra de R$ 250", () => {
    expect(calcularValorFinal(250)).toBe(200);
});
    it("não aplica desconto em R$ 99,99", () => {
    expect(calcularValorFinal(99.99)).toBe(99.99);
});
    it("aplica 10% em R$ 199,99 e arredonda para duas casas", () => {
    expect(calcularValorFinal(199.99)).toBe(179.99);
});