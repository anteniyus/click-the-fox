import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCat,
  getDog,
  getFox,
} from "../../containers/Image/service/ImageService";
import randomize from "../../utility/ArrayUtility";

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
    currentImages: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearImages(state) {
      state.images = [];
    },
    getCurrentImages(state) {
      state.currentImages = state.images.length
        ? randomize(state.images.shift())
        : [];
    },
  },
  extraReducers: {
    [getImages.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getImages.fulfilled]: (state, action) => {
      state.images.push(action.payload);

      if (state.currentImages.length < 1)
        state.currentImages = state.images.shift();

      state.isLoading = false;
    },
    [getImages.rejected]: (state, action) => {
      state.images = [];
      state.currentImages = [];
      state.error = action.error?.message;
      state.isLoading = false;
    },
  },
});

export const { clearImages, getCurrentImages } = imageSlice.actions;

export default imageSlice.reducer;
