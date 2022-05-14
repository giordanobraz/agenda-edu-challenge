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
  }, 500);

  return (
    <div className="header">
      <input type="text" placeholder="Procurar um filme" />
      <div className="search-bar-items">
        <ul>
          <li>
            <p>Um Filme</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
