import { useLocation } from "react-router-dom";
import "./index.scss";

const IMG_LINK = "https://image.tmdb.org/t/p/";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div class="movie_card" id="bright">
      <div class="info_section">
        <div class="movie_header">
          <img
            class="locandina"
            src={`${IMG_LINK}original${state.poster_path}`}
          />
          <h1>{state.title}</h1>
          <h4>{state.release_date}</h4>
          <span class="minutes">117 min</span>
          <p class="type">Action, Crime, Fantasy</p>
        </div>
        <div class="movie_desc">
          <p class="text">{state.overview}</p>
        </div>
      </div>
      <div
        class="blur_back"
        style={{
          background: `url(${IMG_LINK}original${state.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default DetailsPage;
