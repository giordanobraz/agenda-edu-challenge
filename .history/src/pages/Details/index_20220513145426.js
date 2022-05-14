import { useLocation } from "react-router-dom";

const IMG_LINK = "https://image.tmdb.org/t/p";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie-details">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${IMG_LINK}/original${state.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="details">
          <h2>{state.title}</h2>
        </div>
        <div className="description">
          <p>{state.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
