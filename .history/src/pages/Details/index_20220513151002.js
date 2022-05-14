import { useLocation } from "react-router-dom";
import "./index.scss"

const IMG_LINK = "https://image.tmdb.org/t/p";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie-card">
      <div className="info">
        <div className="movie-header">
          <img className="poster" src="" alt="" />
          <h1>Title</h1>
          <h4>Year</h4>
        </div>        
        <div className="movie-description">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blur-background"></div>
    </div>
  );
}

export default DetailsPage;