import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/moviesSlice";
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
