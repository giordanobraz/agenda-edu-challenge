import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    page: 2,
  },
  reducers: {
    setMovies(state, { payload }) {
      return {
        ...state,
        list: [...state.list, payload]
      }
    },
    setPage(state, { payload }) {
      return {
        page: state.page + 1,
      };
    },
  },
});

export const { setMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
