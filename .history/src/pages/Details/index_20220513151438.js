import { useLocation } from "react-router-dom";
import "./index.scss"

const IMG_LINK = "https://image.tmdb.org/t/p";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie-card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src="" alt="" />
          <h1>Title</h1>
          <h4>Year</h4>
        </div>        
        <div className="movie_desc">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="blur_back"></div>
    </div>
  );
}

export default DetailsPage;