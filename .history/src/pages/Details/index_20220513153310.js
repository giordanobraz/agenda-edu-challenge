import { useLocation } from "react-router-dom";
import "./index.scss";

const IMG_LINK = "https://image.tmdb.org/t/p/";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header" style={{
          backgroundImage: `url(${IMG_LINK}w1280${state.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",          
        }}>
          <img
            className="locandina"
            src={`${IMG_LINK}w220_and_h330_face${state.poster_path}`}
            alt={state.title}
          />
          <h1>{state.title}</h1>
          <h4>{state.release_date}</h4>
        </div>
        <div className="movie_desc">
          <p className="text">{state.overview}</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${IMG_LINK}original${state.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
    </div>
  );
}

export default DetailsPage;
