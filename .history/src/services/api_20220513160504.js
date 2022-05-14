import axios from "axios";
import { API_KEY } from "../utils/constants";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: API_KEY,
  },
});
