import React from "react";

export default function Location() {
  let weatherData = {
    city: "Sydney",
    temperature: "16",
    description: "Sunny",
    wind: "10",
    humidity: "80",
  };
  return (
    <div className="format">
      <h2>
        {" "}
        <span id="city">{weatherData.city}</span>
        <div class="temperature-description">
          <span id="temperature">{weatherData.temperature} </span>
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
        <span id="description" className="today-details">
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
          <span id="humidity" class="today-details">
            {weatherData.humidity}%
          </span>
        </div>
      </h2>
    </div>
  );
}
