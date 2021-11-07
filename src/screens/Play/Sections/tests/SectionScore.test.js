import React from "react";
import { render, screen } from "@testing-library/react";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../utility/testUtility/ConsoleTestUtitlity";
import SectionScore from "../SectionScore";

describe("Section Score", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the score", () => {
    const score = 2;
    render(<SectionScore score={score} />);

    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText(score)).toBeInTheDocument();

    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });
});
