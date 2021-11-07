import React from "react";
import { render, screen } from "@testing-library/react";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../utility/testUtility/ConsoleTestUtitlity";
import WelcomeInfo from "../Info";

describe("Welcome Info", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the name", () => {
    const name = "some name";
    render(<WelcomeInfo name={name} changeName={() => {}} />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();

    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });
});
