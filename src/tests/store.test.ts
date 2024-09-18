import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useAppStore } from "../store/useAppStore";

describe("Store", () => {
  it("setScore", () => {
    const { result } = renderHook(() => useAppStore());
    expect(result.current.score).toStrictEqual(0);
    act(() => {
      result.current.setScore();
    });
    expect(result.current.score).toStrictEqual(1);
    act(() => {
      result.current.setScore();
    });
    expect(result.current.score).toStrictEqual(2);
  });
});
