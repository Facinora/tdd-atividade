import { describe, it, expect } from "vitest";
import { calcularValorFinal } from "./desconto";

describe("Sistema de descontos", () => {
  it("não aplica desconto para compra de R$ 50", () => {
    expect(calcularValorFinal(50)).toBe(50);
  });
});