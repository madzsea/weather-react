import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <form id="city-search">
          <input type="text" placeholder="Enter a city" id="city-info" />
          <button
            type="submit"
            className="btn btn-primary search"
            id="city-submit"
          >
            Submit
          </button>
        </form>
        <button id="current-location">Current location</button>
      </div>
    </div>
  );
}
