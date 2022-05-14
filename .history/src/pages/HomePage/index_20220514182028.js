import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/moviesSlice";
import { api } from "../../services/api";
import { useEffect } from "react";
import MovieList from "../../components/List/MovieList";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("movie/popular?language=pt-BR").then((response) => {
      dispatch(setMovies(response.data.results));
    });
  }, []);

  return <MovieList />;
}
