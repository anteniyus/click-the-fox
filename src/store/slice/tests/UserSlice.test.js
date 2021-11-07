import userReducer, {
  addUser,
  updateScore,
  updateCurrentUser,
} from "../UserSlice";

import { user } from "../../../utility/testUtility/TestData";

const score = user.score + 2;
const initialState = {
  users: [],
  currentUser: "",
};

describe("User Slice", () => {
  test("Checks the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  test("Checks user being added to store", () => {
    expect(userReducer(initialState, addUser(user))).toEqual({
      users: [user],
      currentUser: "",
    });
  });

  test("Checks current user being added to store", () => {
    expect(userReducer(initialState, updateCurrentUser(user.name))).toEqual({
      users: [],
      currentUser: user.name,
    });
  });

  test("Checks score being added to store", () => {
    const state = {
      users: [user],
      currentUser: "",
    };

    expect(userReducer(state, updateScore({ name: user.name, score }))).toEqual(
      {
        users: [{ ...user, score }],
        currentUser: "",
      }
    );
  });
});
