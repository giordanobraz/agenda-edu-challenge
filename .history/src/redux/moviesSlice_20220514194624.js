import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    page: 2,
    total_pages: 0,
  },
  reducers: {
    setMovies(state, { payload }) {
      return {
        ...state,
        list: [...state.list, ...payload],
      };
    },
    setPage(state, { payload }) {
      return {
        ...state,
        page: state.page + 1,
      };
    },
    setTotalPages(state, { payload }) {
      return {
        ...state,
        total_pages: payload,
      };
    },
  },
});

export const { setMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
