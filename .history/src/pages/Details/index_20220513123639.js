import { useLocation } from "react-router-dom";

function DetailsPage(props) {
  const location = useLocation();
  const state = location.state;

  return <h1>{state.title}</h1>;
}

export default DetailsPage;
