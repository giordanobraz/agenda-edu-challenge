import { useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import Loading from "../Loading";
import "./MovieList.scss";

import List from "rc-virtual-list";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await api.get(
      "movie/popular?language=pt-BR&page=" + pageParam
    );
    setMovies((prevData) => [...prevData, ...response.data.results]);
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

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  const array = [1, 2, 3];

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>
      <ul className="cards-containter">
        <List
          data={array}
          height={400}
          itemHeight={30}
          itemKey={(item) => item.id}
        >
          {(index) => <div>{index}</div>}
        </List>
        {/* {data.pages.map((group) =>
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
        )} */}
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? (
            <Loading />
          ) : hasNextPage ? (
            "Load More"
          ) : (
            "Nothing More to Load"
          )}
        </button>
      </ul>
    </>
  );
}

export default MovieList;
