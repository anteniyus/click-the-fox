import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCat,
  getDog,
  getFox,
} from "../../containers/Image/service/ImageService";

export const getImages = createAsyncThunk("images", async () => {
  const allPromises = [];
  for (let i = 0; i < 2; i++) allPromises.push(getCat());

  for (let i = 0; i < 6; i++) allPromises.push(getDog());

  allPromises.push(getFox());

  return Promise.all(allPromises);
});

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearImages(state) {
      state.images = [];
    },
  },
  extraReducers: {
    [getImages.pending]: (state) => {
      state.isLoading = true;
      state.images = [];
      state.error = null;
    },
    [getImages.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    },
    [getImages.rejected]: (state, action) => {
      state.images = [];
      state.error = action.error?.message;
      state.isLoading = false;
    },
  },
});

export const { clearImages } = imageSlice.actions;

export default imageSlice.reducer;
