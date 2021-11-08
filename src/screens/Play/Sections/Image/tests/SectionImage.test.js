import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { store } from "../../../../../store/store";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../../utility/testUtility/ConsoleTestUtitlity";
import AppTheme from "../../../../../AppTheme";
import SectionImage from "../SectionImage";
import { animalTypes } from "../../../../../constants/AnimalTypes";

jest.mock("../service/ImageService");
const mockStore = configureStore([]);

describe("Section Image", () => {
  let appStore;
  beforeEach(() => {
    appStore = mockStore({
      images: {
        images: [],
        currentImages: [],
        isLoading: false,
        error: null,
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

  test("Checks the getImages action result", () => {
    appStore = mockStore({
      images: {
        images: [],
        currentImages: [
          {
            data: "https://images.dog.ceo/breeds/boxer/n02108089_5266.jpg",
            type: animalTypes.FOX,
          },
        ],
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={appStore}>
        <AppTheme>
          <SectionImage onImageClick={() => {}} />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Checks the loading", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <SectionImage onImageClick={() => {}} />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
    expect(screen.getByText("LOADING")).toBeInTheDocument();
  });

  test("Checks the retry button", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <SectionImage onImageClick={() => {}} />
        </AppTheme>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("RETRY")).toBeInTheDocument();
    });
  });
});
