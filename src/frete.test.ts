import { describe, it, expect } from "vitest";
import { calcularFrete } from "./frete";

describe("Cálculo de frete", () => {
  it("cobra R$ 20 para compra de R$ 50", () => {
    expect(calcularFrete(50)).toBe(20);
  });
});