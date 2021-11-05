import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCat,
  getDog,
  getFox,
} from "../../containers/Image/service/ImageService";

const loadImage = (image) =>
  new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = image.data;
    loadImg.onload = () => resolve(image);
    loadImg.onerror = (err) => reject(err);
  });

export const getImages = createAsyncThunk("images", async () => {
  const allPromisesURLLoad = [];

  for (let i = 0; i < 2; i++) allPromisesURLLoad.push(getCat());
  for (let i = 0; i < 6; i++) allPromisesURLLoad.push(getDog());

  allPromisesURLLoad.push(getFox());

  return Promise.all(allPromisesURLLoad).then((images) => {
    const allPromisesImageLoad = images.map((image) => loadImage(image));

    return Promise.all(allPromisesImageLoad);
  });
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
