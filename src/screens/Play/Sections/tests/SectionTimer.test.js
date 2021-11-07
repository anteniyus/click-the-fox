import React from "react";
import { render, screen } from "@testing-library/react";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../utility/testUtility/ConsoleTestUtitlity";
import SectionTimer from "../SectionTimer";

describe("Section Timer", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(<SectionTimer onComplete={() => {}} />);

    expect(screen.getByText("Time Left:")).toBeInTheDocument();

    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });
});
