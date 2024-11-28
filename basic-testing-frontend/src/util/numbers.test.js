import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
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
})

describe('cleanNumbers()', () => {
  it('should return an array of numbers if given an array of string number values is provided', () => {
    const input = ['1', '2'];
    
    const result = cleanNumbers(input);
    
    expect(result).toEqual([1, 2]);
  })

  it('should yield an error if an array with at least one empty string is provided', () => {
    const input = ['', 2];

    const resultFn = () => {
      cleanNumbers(input);
    }

    expect(resultFn).toThrow();
  })
})