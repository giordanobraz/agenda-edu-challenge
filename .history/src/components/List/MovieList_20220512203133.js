import { useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import VirtualScroller from "virtual-scroller/react";
import Loading from "../Loading";
import "./MovieList.scss";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await api.get(
      "movie/popular?language=pt-BR&page=" + pageParam
    );
    setMovies(() => [...movies, ...response.data.results]);
    return response.data;
  };

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("movies", fetchMovies, {
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  const getColumnsCount = (container) => {
    if (container.getWidth() > 1280) {
      return 3;
    }
    return 1;
  };

  function ListData(props)  {
    const { children: movie } = props;

    return (
      <div className="card" key={movie.id}>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-details">
          <p>{movie.title}</p>
          <span>{movie.vote_average}/10</span>
        </div>
      </div>
    );
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>

     

      <button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? (
          <Loading />
        ) : hasNextPage ? (
          "Load More"
        ) : (
          "Nothing More to Load"
        )}
      </button>

      {/* <ul className="cards-containter">
        {data.pages.map((group) =>
          group.results.map((movie) => (
            <li className="card" key={movie.id}>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-details">
                <p>{movie.title}</p>
                <span>{movie.vote_average}/10</span>
              </div>
            </li>
          ))
        )}
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? (
            <Loading />
          ) : hasNextPage ? (
            "Load More"
          ) : (
            "Nothing More to Load"
          )}
        </button>
      </ul> */}
    </>
  );
}

export default MovieList;
