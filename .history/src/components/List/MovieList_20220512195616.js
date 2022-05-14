import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import Loading from "../Loading";
import "./MovieList.scss";
import GridList from "react-gridlist";
import { FixedSizeGrid as Grid } from "react-window"
import { useState } from "react";

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

  const getGridGap = (elementWidth, windowHeight) =>
    elementWidth > 720 && windowHeight > 480 ? 10 : 5;

  const getColumnCount = (elementWidth) => Math.floor(elementWidth / 300);

  const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

  const getItemData = (image, columnWidth) => {
    let imageRatio = image.height / image.width;
    let adjustedHeight = Math.round(columnWidth * imageRatio);
    return {
      key: image.url,
      height: adjustedHeight,
    };
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>FILMES POPULARES DA SEMANA</h1>

      <GridList
        items={movies}
        getGridGap={getGridGap}
        getColumnCount={getColumnCount}
        getWindowMargin={getWindowMargin}
        getItemData={getItemData}
        renderItem={(movie) => {
          return (
            <li className="card" key={movie.id}>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt={movie.title}
                height="auto"
              />
              <div className="card-details">
                <p>{movie.title}</p>
                <span>{movie.vote_average}/10</span>
              </div>
            </li>
          );
        }}
      />

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
