import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { api } from "../../services/api";
import { API_SEARCH_LINK } from "../../utils/constants";
import "./SearchBar.scss";
import { toast } from "react-toastify";


function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = debounce((value) => {
    if (value === "") {
      setSearchResults([]);
    } else {
      api
        .get(`${API_SEARCH_LINK}query=${value}`)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((err) => {
          toast.error("Erro ao buscar o filme. Mensagem: " + err.message);
        });
    }
  }, 500);

  return (
    <div className="menu">
      <div>
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
      </div>
      <div className="header">
        <input
          type="text"
          placeholder="Procurar um filme"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchResults.length > 0 && (
          <div className="search-bar-items">
            <ul>
              {searchResults.map((movie) => (
                <Link
                  key={movie.id}
                  className="movie_link"
                  to={`/movie/${movie.id}`}
                  state={movie}
                  onClick={() => setSearchResults([])}
                >
                  <p>{movie.title}</p>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
