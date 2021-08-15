import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="format">
      <h2>
        {" "}
        <span id="city">{props.data.city}</span>
        <div className="temperature-description">
          <span id="temperature">{Math.round(props.data.temperature)}</span>
          <span id="units">°C</span>
        </div>
        <div>
          <img
            src="https://openweathermap.org/img/wn/{weatherData.icon}@2x.png"
            id="icon"
            alt="weather-icon"
          />
        </div>
        <span className="today-weather"> Weather:</span>{" "}
        <span id="description" className="text-capitalize">
          {props.data.description}
        </span>
        <div>
          {" "}
          <span className="today-weather"> Wind speed: </span>
          <span id="wind" className="today-details">
            {props.data.wind} km/h
          </span>
        </div>
        <div>
          {" "}
          <span className="today-weather"> Humidity: </span>
          <span id="humidity" className="today-details">
            {props.data.humidity}%
          </span>
        </div>
      </h2>
    </div>
  );
}
