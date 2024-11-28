import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should not throw an error if a correct string is passed", () => {
    const input = "test";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrow();
  });

  it("should not throw an error if an empty string is passed", () => {
    const input = "  ";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });

  it("should throw an error if an invalid value is passed", () => {
    const input = 10;

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/trim is not a function/);
  });
});

describe("validateNumber()", () => {
  it("should not throw an error if a number is passed", () => {
    const input = 1;

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow();
  });

  it("should throw an error if a non-number value is passed", () => {
    const input = "test";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it("should not throw an error if a numeric value in a string is provided", () => {
    const input = "10";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow();
  });
});
