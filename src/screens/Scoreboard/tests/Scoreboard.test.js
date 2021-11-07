import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { store } from "../../../store/store";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../utility/testUtility/ConsoleTestUtitlity";
import Scoreboard from "../Scoreboard";
import AppTheme from "../../../AppTheme";
import { addUser } from "../../../store/slice/UserSlice";

const mockStore = configureStore([]);

describe("Scorboard", () => {
  let appStore;
  beforeEach(() => {
    appStore = mockStore({
      users: {
        users: [],
        currentUser: "",
      },
    });

    appStore.dispatch = jest.fn();
  });

  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <Scoreboard />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Rows per page:")).toBeInTheDocument();
    expect(screen.getByText("0-0 of 0")).toBeInTheDocument();

    expect(screen.getByText("To Welcome Screen")).toBeInTheDocument();
    expect(screen.getByText("Play!")).toBeInTheDocument();
  });

  test("Checks the table headers", () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <Scoreboard />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Rank")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Score")).toBeInTheDocument();
  });

  test("Checks the addUser action result", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <Scoreboard />
        </AppTheme>
      </Provider>
    );

    await store.dispatch(
      addUser({
        name: "reza",
        score: 0,
        date: "Jan",
      })
    );

    expect(screen.getByText("reza")).toBeInTheDocument();
  });
});
