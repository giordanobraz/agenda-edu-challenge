import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/moviesSlice";
import { api } from "../../services/api";
import { useEffect } from "react";
import MovieList from "../../components/List/MovieList";

export default function HomePage() {
  return <MovieList />;
}
