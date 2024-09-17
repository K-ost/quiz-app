import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("App render", () => {
    render(<App />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
