import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "e70f39679296042a105ae9d2c915332b";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    // Search for a city
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container body">
          <h1>Weather</h1>
          <h4 className="date">
            <FormattedDate date={weatherData.date} />
          </h4>
          <form id="city-search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city"
              id="city-info"
              onChange={handleCity}
            />
            <button type="button" className="btn btn-info">
              Submit
            </button>
            <br />
            <button
              type="button"
              className="btn btn-outline-info"
              id="Location"
            >
              Current Location
            </button>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
