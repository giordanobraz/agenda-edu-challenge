import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { api } from "../../services/api";
import { API_SEARCH_LINK } from "../../utils/constants";
import "./SearchBar.scss";

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = debounce((value) => {
    api.get(`${API_SEARCH_LINK}query=${value}`).then((response) => {
      setSearchResults(response.data.results);
    });

    if (value === "") {
      setSearchResults([]);
    }
  }, 500);

  return (
    <>
      <Link to="/" style={{
        fontWeight: "bold",
        fontSize: "1.5rem",        
        textDecoration: "none",
      }}>HOME</Link>
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
    </>
  );
}

export default SearchBar;
