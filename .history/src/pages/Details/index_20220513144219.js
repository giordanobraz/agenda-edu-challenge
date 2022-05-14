import { useLocation } from "react-router-dom";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie-details">
      <div className="hero">
        <div className="details"></div>
        <div className="description">
          <p>{state.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
