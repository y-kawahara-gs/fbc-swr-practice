import useSWR from "swr";
import "./App.css";

const url = "http://localhost:3001/200?sleep=2000";
const headers = { Accept: "application/json" };
const fetcher = (url) =>
  fetch(url, { headers })
    .then((res) => res.json())
    .then((json) => json.description);

function App() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <p className="App-header">Failed to load.</p>;
  if (isLoading) return <p className="App-header">Loading...</p>;

  return <p className="App-header">{data && `Status : ${data}`}</p>;
}

export default App;
