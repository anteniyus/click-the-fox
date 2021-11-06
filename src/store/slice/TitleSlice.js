import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "users",
  initialState: {
    title: "",
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
