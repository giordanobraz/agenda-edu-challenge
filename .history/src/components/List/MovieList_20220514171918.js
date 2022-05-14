import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import { VirtuosoGrid } from "react-virtuoso";
import Loading from "../Loading";
import { IMG_LINK } from "../../utils/constants";
import { ItemContainer, ListContainer } from "./VirtuosoStyled";
import "./MovieList.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/moviesSlice";

function MovieList() {
  const { list } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await api.get(
      "movie/popular?language=pt-BR&page=" + pageParam
    );
    dispatch(setMovies(response.data.results));
  };

  const { isLoading, isError, error, fetchNextPage } = useInfiniteQuery(
    "movies",
    fetchMovies,
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>

      <VirtuosoGrid
        useWindowScroll
        style={{ height: 700, marginBottom: "2rem" }}
        totalCount={list.length}
        endReached={() => setTimeout(() => fetchNextPage(), 2000)}
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
    </>
  );
}

export default MovieList;
