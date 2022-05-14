import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/Search/SearchBar";
import "./styles/global.scss";
import DetailsPage from "./pages/Details";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:movieID" element={<DetailsPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
