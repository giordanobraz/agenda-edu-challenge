import { configureStore } from "@reduxjs/toolkit";
import movies from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies,
  },
});

export default store;
