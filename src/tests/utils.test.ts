import { describe, expect, it } from "vitest";
import { getClassName, getImageLink } from "../utils";

describe("Utils", () => {
  it("getClassName - active", () => {
    const result = getClassName(false, "question", "question", "answer");
    expect(result).toStrictEqual("active");
  });

  it("getClassName - wrong", () => {
    const result = getClassName(true, "question", "question", "answer");
    expect(result).toStrictEqual("wrong");
  });

  it("getClassName - correct", () => {
    const result = getClassName(true, "answer", "question", "answer");
    expect(result).toStrictEqual("correct");
  });

  it("getClassName - success", () => {
    const result = getClassName(true, "answer", "answer", "answer");
    expect(result).toStrictEqual("success");
  });

  it("getImageLink", () => {
    const result = getImageLink("../assets/img.svg");
    expect(result.includes("file:///")).toBe(true);
  });
});
