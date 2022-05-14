import axios from "axios";
import { API_KEY, API_LINK } from "../utils/constants";

export const api = axios.create({
  baseURL: API_LINK,
  headers: {
    Authorization: API_KEY,
  },
});
