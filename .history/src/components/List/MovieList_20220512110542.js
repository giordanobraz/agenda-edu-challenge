import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import Loading from "../Loading";

function MovieList() {
  const [movies, setMovies] =
    useState <
    MoviesResponse >
    {
      page: 0,
      total_pages: 0,
      total_results: 0,
      results: [],
    };

  useEffect(() => {
    api.get <
      MoviesResponse >
      "movie/popular?language=pt-BR".then((response) => {
        setMovies(response.data);
      });
  }, []);

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>
      <div className="cards-containter">
        {movies.results.length ? (
          movies.results.map((movie) => (
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
          ))
        ) : (
          <img src={loadingImg} alt="Loading" width={50} />
        )}
      </div>
    </>
  );
}

export default MovieList;
