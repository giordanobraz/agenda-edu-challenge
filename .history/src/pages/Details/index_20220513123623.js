function DetailsPage(props) {
  const state = location.state;

  return <h1>{state.title}</h1>;
}

export default DetailsPage;
