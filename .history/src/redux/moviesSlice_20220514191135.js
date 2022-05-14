import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    page: 1,
    total_pages: 0,
  },
  reducers: {
    setMovies(state, { payload }) {
      state.list = [...state.list, ...payload];
    },
    setPage(state) {
      state.page++;
    },
    setTotalPages(state, { payload }) {
      state.total_pages = payload;
    },
  },
});

export const { setMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
