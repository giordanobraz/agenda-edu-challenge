function MovieList() {
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