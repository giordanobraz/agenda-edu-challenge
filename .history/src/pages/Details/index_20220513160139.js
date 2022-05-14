import { useLocation } from "react-router-dom";
import "./index.scss";

const IMG_LINK = "https://image.tmdb.org/t/p/";

function DetailsPage() {
  const location = useLocation();
  const state = location.state;

  const formatted_date = new Date(state.release_date).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={`${IMG_LINK}original${state.poster_path}`}
          />
          <h1>{state.title}</h1>
          <h4>{formatted_date}</h4>
          <span className="minutes">{state.vote_average}</span>
          <p className="type">{`Média de ${state.vote_count} votos contabilizados.`}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{state.overview}</p>
        </div>
      </div>
      <div
        className="blur_back"
        style={{
          background: `url(${IMG_LINK}original${state.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      ></div>
    </div>
  );
}

export default DetailsPage;
