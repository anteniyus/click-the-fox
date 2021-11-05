import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import imageReducer from "./slice/ImageSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
