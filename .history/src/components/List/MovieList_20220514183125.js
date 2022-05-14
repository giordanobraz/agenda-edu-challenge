import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import { VirtuosoGrid } from "react-virtuoso";
import { IMG_LINK } from "../../utils/constants";
import { ItemContainer, ListContainer } from "./VirtuosoStyled";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/moviesSlice";
import Loading from "../Loading";
import "./MovieList.scss";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function MovieList() {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.movies);

  useEffect(() => {
    api.get("movie/popular?language=pt-BR").then((response) => {
      setPage(response.data.page);
      dispatch(setMovies(response.data.results));
    });
  }, []);

  return (
    console.log(page),
    (
      <>
        <h1>FILMES POPULARES DA SEMANA</h1>

        <VirtuosoGrid
          useWindowScroll
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

        <ToastContainer autoClose={5000} />
      </>
    )
  );
}

export default MovieList;
