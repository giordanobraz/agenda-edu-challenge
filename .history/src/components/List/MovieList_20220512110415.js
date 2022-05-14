import { useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import Loading from "../Loading";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async ({ pageParam = 1 }) => {
    const { data } = await api.get(
      "movie/popular?language=pt-BR&page=" + pageParam
    );
    setMovies([...movies, ...data.results]);
    return data;
  };

  const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery(
    ["movies"],
    fetchMovies,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page <= lastPage.total_pages) {
          return lastPage.page + 1;
        } else {
          return null;
        }
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>
      <ul className="cards-containter">
        {data?.pages.map((page) =>
          page.results.map((movie) => (
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
        <button onClick={() => fetchNextPage()}>Load More</button>
      </ul>
    </>
  );
}

export default MovieList;
