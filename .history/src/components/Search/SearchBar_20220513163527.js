import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Procurar um filme" />
      <div>
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
