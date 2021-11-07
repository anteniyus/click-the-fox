import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../utility/testUtility/ConsoleTestUtitlity";
import AppTheme from "../../../AppTheme";
import MainScreen from "../Main";
import { setTitle } from "../../../store/slice/TitleSlice";
import { store } from "../../../store/store";

const mockStore = configureStore([]);

const welcomeTitle = "Welcome";
const title = "another title";

describe("Welcome Info", () => {
  let appStore;
  beforeEach(() => {
    appStore = mockStore({
      images: { images: [], currentImages: [], isLoading: false, error: null },
      users: { users: [], currentUser: "" },
      title: {
        title: "",
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

  test("Checks the DOMs", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <MainScreen />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText(welcomeTitle)).toBeInTheDocument();
  });

  test("Checks the title", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <MainScreen />
        </AppTheme>
      </Provider>
    );

    await store.dispatch(setTitle(title));

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
