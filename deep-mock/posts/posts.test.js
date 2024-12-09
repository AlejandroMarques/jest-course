import { expect, describe, it, vi, beforeEach } from "vitest";
import { savePost, extractPostData } from "./posts";

const testTitle = "test title";
const testContent = "test content";
let testFormData;
describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });

  it("should extract title and content from the provided form data", () => {
    const extractedData = extractPostData(testFormData);

    expect(extractedData.title).toBe(testTitle);
    expect(extractedData.content).toBe(testContent);
  });

  it("should throw an error if title is not provided", () => {
    delete testFormData.title;

    const resultFn = () => extractPostData(testFormData);

    expect(resultFn).toThrow("A title must be provided");
  });

  it("should throw an error if content is not provided", () => {
    delete testFormData.content;

    const resultFn = () => extractPostData(testFormData);

    expect(resultFn).toThrow("Content must not be empty");
  });

  it("should throw an error if no form is provided", () => {
    const resultFn = () => extractPostData();
    expect(resultFn).toThrow();
  });
});
