import "./SearchBar.scss";

function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Procurar um filme" />
      </div>
      <div className="search-bar-items">
        <ul>
          <li>
            <p>Um Filme</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
