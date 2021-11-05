import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: "",
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateScore(state, action) {
      const targetUser = state.users.find(
        (element) => element.name === action.payload.name
      );
      targetUser.score = action.payload.score;
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser, updateScore, updateCurrentUser } = userSlice.actions;

export default userSlice.reducer;
