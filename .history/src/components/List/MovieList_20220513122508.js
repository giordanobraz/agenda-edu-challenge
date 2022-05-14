import { useState } from "react";
import { api } from "../../services/api";
import { useInfiniteQuery } from "react-query";
import Loading from "../Loading";
import { VirtuosoGrid } from "react-virtuoso";
import "./MovieList.scss";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 25%;
  height: 420px;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MovieList() {
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await api.get(
      "movie/popular?language=pt-BR&page=" + pageParam
    );
    setMovies(() => [...movies, ...response.data.results]);
    return response.data;
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
        totalCount={movies.length}
        overscan={200}
        endReached={() => setTimeout(() => fetchNextPage(), 2000)}
        components={{
          Item: ItemContainer,
          List: ListContainer,
        }}
        itemContent={(index) => {
          const movie = movies[index];
          return (
            <>
              <li
                className="card"
                key={movie.id}
                onClick={navigate(`/details`)}
              >
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt={movie.title}
                  width={220}
                  height={330}
                />
                <div className="card-details">
                  <p>{movie.title}</p>
                  <span>{movie.vote_average}/10</span>
                </div>
              </li>
            </>
          );
        }}
      />
    </>
  );
}

export default MovieList;