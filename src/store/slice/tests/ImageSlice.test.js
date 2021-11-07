import imageReducer, { getImages } from "../ImageSlice";
import data from "../../../utility/testUtility/TestData";

const initialState = {
  images: [],
  currentImages: [],
  isLoading: false,
  error: null,
};

describe("Image Slice", () => {
  test("Checks the initial state", () => {
    expect(imageReducer(undefined, {})).toEqual(initialState);
  });

  test("Checks the loading true when getImages is pending", () => {
    const action = { type: getImages.pending.type };
    const state = imageReducer(initialState, action);

    expect(state).toEqual({
      images: [],
      currentImages: [],
      isLoading: true,
      error: null,
    });
  });

  test("Checks the loading and the images and array shift when getImages is fulfilled", () => {
    const action = {
      type: getImages.fulfilled.type,
      payload: data,
    };
    const state = imageReducer(initialState, action);

    expect(state).toEqual({
      images: [],
      currentImages: data,
      isLoading: false,
      error: null,
    });
  });

  test("Checks the loading false and the error when getImages is rejected", () => {
    const action = {
      type: getImages.rejected.type,
      error: { message: "some error" },
    };
    const state = imageReducer(initialState, action);

    expect(state).toEqual({
      images: [],
      currentImages: [],
      isLoading: false,
      error: "some error",
    });
  });
});
