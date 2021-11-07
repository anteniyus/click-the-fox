import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../utility/testUtility/ConsoleTestUtitlity";
import AppTheme from "../../../AppTheme";
import WelcomeForm from "../Form";

const mockStore = configureStore([]);

describe("Welcome Form", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
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

    store.dispatch = jest.fn();
  });

  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <WelcomeForm />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByText("Play!")).toBeInTheDocument();
  });

  test("Checks the input value", () => {
    const rendered = render(
      <Provider store={store}>
        <AppTheme>
          <WelcomeForm />
        </AppTheme>
      </Provider>
    );

    const input = rendered.getByTestId("name");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });
});
