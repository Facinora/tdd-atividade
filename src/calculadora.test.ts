import { describe, it, expect } from "vitest";
import { somar, subtrair, multiplicar } from "./calculadora";

describe("Calculadora", () => {
  it("soma 3 e 5 resultando em 8", () => {
    expect(somar(3, 5)).toBe(8);
  });
  it("subtrai 4 de 10 resultando em 6", () => {
    expect(subtrair(10, 4)).toBe(6);
    });
    it("multiplica 4 por 3 resultando em 12", () => {
  expect(multiplicar(4, 3)).toBe(12);
});
});