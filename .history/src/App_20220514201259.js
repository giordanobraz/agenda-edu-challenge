import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/Search/SearchBar";
import "./styles/global.scss";
import DetailsPage from "./pages/Details";
import { setMovies, setTotalPages } from "./redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { api } from "./services/api";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("movie/popular?language=pt-BR").then((response) => {
      dispatch(setMovies(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
    });
  }, [dispatch]);

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
