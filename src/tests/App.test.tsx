import { describe, expect, it } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";
import { useAppStore } from "../store/useAppStore";

describe("App", () => {
  it("App render", () => {
    render(<App />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });

  it("Choosing a subject", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("subject-React"));
    expect(screen.getByText("Submit Answer")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
  });

  it("Showing error when option wasn't selected", async () => {
    render(<App />);
    expect(
      screen.queryByText("Please select an answer")
    ).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Submit Answer"));
    expect(screen.getByText("Please select an answer")).toBeInTheDocument();
  });

  it("Selecting wrong answer", async () => {
    render(<App />);
    const option = screen.getByTestId("option-0");
    const option1 = screen.getByTestId("option-1");
    await userEvent.click(screen.getByTestId("option-0"));
    await userEvent.click(screen.getByText("Submit Answer"));
    expect(option.className.includes("wrong")).toBe(true);
    expect(option1.className.includes("correct")).toBe(true);
    expect(screen.getByText("Next Question")).toBeInTheDocument();
  });

  it("Selecting correct answer", async () => {
    render(<App />);
    const option = screen.getByTestId("option-1");
    await userEvent.click(option);
    await userEvent.click(screen.getByText("Submit Answer"));
    expect(option.className.includes("success")).toBe(true);
    expect(screen.getByText("Next Question")).toBeInTheDocument();
  });

  it("Moving to next page", async () => {
    render(<App />);
    const option = screen.getByTestId("option-1");
    await userEvent.click(option);
    await userEvent.click(screen.getByText("Submit Answer"));
    await userEvent.click(screen.getByText("Next Question"));
    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument();
  });

  it("Passing the quiz and showing score", async () => {
    render(<App />);
    const { result } = renderHook(() => useAppStore());
    result.current.icon = "";
    result.current.questionsCount = 1;
    result.current.score = 0;
    result.current.screen = "quiz";
    result.current.subject = "React";

    await userEvent.click(screen.getByTestId("option-1"));
    await userEvent.click(screen.getByText("Submit Answer"));
    await userEvent.click(screen.getByText("Next Question"));

    await userEvent.click(screen.getByTestId("option-2"));
    await userEvent.click(screen.getByText("Submit Answer"));
    await userEvent.click(screen.getByText("Next Question"));

    await userEvent.click(screen.getByTestId("option-2"));
    await userEvent.click(screen.getByText("Submit Answer"));
    await userEvent.click(screen.getByText("Finish the test"));

    expect(screen.getByText(/Quiz completed/)).toBeInTheDocument();
    expect(screen.getByText("Play Again")).toBeInTheDocument();
    expect(screen.getByTestId("scoreValue").textContent).toBe("3");
  });

  it("Coming back to homepage", async () => {
    render(<App />);
    await userEvent.click(screen.getByText("Play Again"));
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
    expect(screen.getByText("Frontend Quiz!")).toBeInTheDocument();
  });
});
