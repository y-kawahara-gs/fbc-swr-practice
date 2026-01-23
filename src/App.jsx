import useSWR from "swr";
import "./App.css";

const url = "http://localhost:3001/200?sleep=2000";
const headers = { Accept: "application/json" };
const fetchWithHeaders = (url, { headers }) =>
  fetch(url, { headers })
    .then((res) => res.json())
    .then((json) => json.description);

function App() {
  const { data, error, isLoading } = useSWR(
    [url, { headers }],
    ([url, { headers }]) => fetchWithHeaders(url, { headers })
  );
  return (
    <p className="App-header">
      {error && "Failed to load."}
      {isLoading && "Loading..."}
      {data && `Status : ${data}`}
    </p>
  );
}

export default App;
