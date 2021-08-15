import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
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
            <button
              type="button"
              className="btn btn-outline-info"
              id="Location"
            >
              Current Location
            </button>
          </form>
          <div className="format">
            <h2>
              {" "}
              <span id="city">{weatherData.city}</span>
              <div className="temperature-description">
                <span id="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span id="units">°C</span>
              </div>
              <div>
                <img
                  src="https://openweathermap.org/img/wn/01d@2x.png"
                  id="icon"
                  alt="weather-icon"
                />
              </div>
              <span className="today-weather"> Weather:</span>{" "}
              <span id="description" className="text-capitalize">
                {weatherData.description}
              </span>
              <div>
                {" "}
                <span className="today-weather"> Wind speed: </span>
                <span id="wind" className="today-details">
                  {weatherData.wind} km/h
                </span>
              </div>
              <div>
                {" "}
                <span className="today-weather"> Humidity: </span>
                <span id="humidity" className="today-details">
                  {weatherData.humidity}%
                </span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e70f39679296042a105ae9d2c915332b";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
