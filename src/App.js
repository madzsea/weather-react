import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Location from "./Location";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container body">
        <h1>Weather</h1>
        <form id="city-search">
          <input type="text" placeholder="Enter a city" id="city-info" />
          <button type="button" className="btn btn-info">
            Submit
          </button>
          <br />
          <button type="button" className="btn btn-outline-info" id="Location">
            Current Location
          </button>
        </form>

        <Location />
        <a href="https://github.com/madzsea/weather-react" className="link">
          Open Source code
        </a>
      </div>
    </div>
  );
}
