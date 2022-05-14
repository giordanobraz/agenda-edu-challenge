import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/Search/SearchBar";
import "./styles/global.scss";
import DetailsPage from "./pages/Details";
import { setMovies } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { api } from "./services/api";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("movie/popular?language=pt-BR").then((response) => {
      setPage(response.data.page);
      dispatch(setMovies(response.data.results));
    });
  }, []);

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieID" element={<DetailsPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
