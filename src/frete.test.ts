import { describe, it, expect } from "vitest";
import { calcularFrete } from "./frete";

describe("Cálculo de frete", () => {
it("cobra R$ 20 para compra de R$ 50", () => {
expect(calcularFrete(50)).toBe(20);
});
it("cobra R$ 20 para compra de R$ 99,99", () => {
expect(calcularFrete(99.99)).toBe(20);
});
it("cobra R$ 10 para compra de R$ 100", () => {
expect(calcularFrete(100)).toBe(10);
});
it("cobra R$ 10 para compra de R$ 199,99", () => {
expect(calcularFrete(199.99)).toBe(10);
});
it("frete grátis para compra de R$ 200", () => {
expect(calcularFrete(200)).toBe(0);
});
});