import { it, expect, describe, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

describe("writeData()", () => {
  it("should execute the writeData method", () => {
    const testData = "Test data";
    const testFilename = "test.txt";

    writeData(testData, testFilename);

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });

  it("should return a promise that resolves to no value if called correctly", async () => {
    const testData = "Test data";
    const testFilename = "test.txt";

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
