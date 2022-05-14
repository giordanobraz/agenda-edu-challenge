import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    page: 1,
  },
  reducers: {
    setMovies(state, { payload }) {
      toast.done("Lista de filmes atualizada.");
      return {
        ...state,
        list: [...state.list, ...payload],
      };
    },
    setPage(state, { payload }) {
      state.page++;
    },
  },
});

export const { setMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
