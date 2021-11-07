import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../utility/testUtility/ConsoleTestUtitlity";
import Play from "../Play";
import AppTheme from "../../../AppTheme";

const mockStore = configureStore([]);

describe("Play", () => {
  let appStore;
  beforeEach(() => {
    appStore = mockStore({
      images: {
        images: [],
        currentImages: [],
        isLoading: false,
        error: null,
      },
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
          <Play />
        </AppTheme>
      </Provider>
    );

    expect(screen.getAllByRole("heading", { level: 5 })).toHaveLength(2);
    expect(screen.getByText("30")).toBeInTheDocument();
  });
});
