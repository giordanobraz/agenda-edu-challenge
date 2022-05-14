import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { VirtuosoGrid } from "react-virtuoso";
import { IMG_LINK } from "../../utils/constants";
import { ItemContainer, ListContainer } from "./VirtuosoStyled";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setPage } from "../../redux/moviesSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MovieList.scss";

function MovieList() {
  const dispatch = useDispatch();
  const { list, page, total_pages } = useSelector((state) => state.movies);

  const fetchMoreMovies = async () => {
    dispatch(setPage());

    if (page <= total_pages) {
      const { data } = await api
        .get("movie/popular?language=pt-BR&page=" + page)
        .catch((err) =>
          toast.error(
            "Erro ao carregar a lista de filmes. Mensagem: " + err.message
          )
        );
      dispatch(setMovies(data.results));
      toast.success("Filmes carregados com sucesso.");
    }
  };

  return (
    <>
      {list.length > 0 && (
        <>
          <h1>FILMES POPULARES DA SEMANA</h1>

          <VirtuosoGrid
            useWindowScroll
            endReached={() => setTimeout(() => fetchMoreMovies(), 1000)}
            style={{ height: 700, marginBottom: "2rem" }}
            totalCount={list.length}
            components={{
              Item: ItemContainer,
              List: ListContainer,
            }}
            itemContent={(index) => {
              const movie = list[index];
              return (
                <>
                  <Link
                    key={movie.id}
                    className="card"
                    to={`/movie/${movie.id}`}
                    state={movie}
                  >
                    <img
                      src={`${IMG_LINK}/w220_and_h330_face/${movie.poster_path}`}
                      alt={movie.title}
                      width={220}
                      height={330}
                    />
                    <div className="card-details">
                      <p>{movie.title}</p>
                      <span>{movie.vote_average}/10</span>
                    </div>
                  </Link>
                </>
              );
            }}
          />

          <ToastContainer autoClose={2000} />
        </>
      )}
    </>
  );
}

export default MovieList;
