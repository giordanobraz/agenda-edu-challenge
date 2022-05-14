import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
  },
  reducers: {
    setMovies(state, { payload }) {
      return {
        ...state,
        list: [...state.list, ...payload],
      };
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
