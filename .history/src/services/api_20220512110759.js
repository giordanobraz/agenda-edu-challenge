import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQzN2E4YzM3M2JjNWRiNGJhODA0MTVlZWFmYjM0MCIsInN1YiI6IjVhNDMzNzQ4YzNhMzY4NTg5MDA0NTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJrGbmMD-B0dSERBGT_FSRx5XqX0lWkoMPpkK78bOzs`,
  },
});
