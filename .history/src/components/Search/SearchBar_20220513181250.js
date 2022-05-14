import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { api } from "../../services/api";
import { API_SEARCH_LINK } from "../../utils/constants";
import "./SearchBar.scss";

function SearchBar() {
  const [inputValue, setInputValue] = useState([]);
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
    <div className="header">
      <input
        type="text"
        placeholder="Procurar um filme" 
        value={inputValue}       
        onChange={(e) => setInputValue(e.target.value)}
      />
      {searchResults.length > 0 && (
        <div className="search-bar-items">
          <ul>
            {searchResults.map((movie) => (
              <Link
                className="movie_link"
                to={`/movie/${movie.id}`}
                state={movie}
                onClick={() => {
                  setSearchResults([]);
                  setInputValue("");
                }}
              >
                <p>{movie.title}</p>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
