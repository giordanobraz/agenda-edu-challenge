import { useLocation } from "react-router-dom";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie-details">
      <div className="hero" style={{
        before: {
          backgroundImage: `url(${state.backdrop_path})`
        }
      }}>
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
