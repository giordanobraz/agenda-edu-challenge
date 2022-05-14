import { useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import { FixedSizeGrid as List } from "react-window";
import Loading from "../Loading";
import "./MovieList.scss";

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

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const movie = movies[rowIndex];

    return (
      <div className="card" style={style}>
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

  // useEffect(() => {
  //   api.get("movie/popular?language=pt-BR").then((response) => {
  //     setMovies(response.data);
  //   });
  // }, []);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>
      <div className="cards-containter">
        <List
          height={600}
          width={1200}
          columnCount={5}
          rowCount={movies.length}
          rowHeight={200}
          columnWidth={200}
          itemData={movies}
        >
          {Cell}
        </List>
        {/* {data.pages.map((group) =>
          group.results.map((movie) => (
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
      </div>
    </>
  );
}

export default MovieList;
