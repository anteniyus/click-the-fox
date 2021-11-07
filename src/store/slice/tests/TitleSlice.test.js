import titleReducer, { setTitle } from "../TitleSlice";

const title = "title";
const title2 = "title2";

const initialState = {
  title: "",
};

describe("Title Slice", () => {
  test("Checks the initial state", () => {
    expect(titleReducer(undefined, {})).toEqual(initialState);
  });

  test("Checks title being added to store", () => {
    expect(titleReducer(initialState, setTitle(title))).toEqual({
      title,
    });
  });

  test("Checks the title replacement", () => {
    const previousState = { title };
    expect(titleReducer(previousState, setTitle(title2))).toEqual({
      title: title2,
    });
  });
});
