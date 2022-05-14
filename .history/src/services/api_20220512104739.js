import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
  },
});
