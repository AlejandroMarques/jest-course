import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when given a string", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(1).toBeTypeOf('number');
});

it("should return NaN if invalid value is provided", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});