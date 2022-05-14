import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    }
  },  
});

export const { setMovies } = slice.actions; 
export default slice.reducer;