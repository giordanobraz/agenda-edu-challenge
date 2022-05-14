import "./SearchBar.scss";

function SearchBar() {
  return (
    <>
      <input type="text" placeholder="Procurar um filme" />
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
