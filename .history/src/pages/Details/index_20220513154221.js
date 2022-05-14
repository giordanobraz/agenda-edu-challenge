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
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <h1>Bright</h1>
          <h4>2017, David Ayer</h4>
          <span class="minutes">117 min</span>
          <p class="type">Action, Crime, Fantasy</p>
        </div>
        <div class="movie_desc">
          <p class="text">
{state.overview}
          </p>
        </div>
      </div>
      <div
        class="blur_back"
        style={{
          background: `url(${IMG_LINK}original${state.backdrop_path})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default DetailsPage;
