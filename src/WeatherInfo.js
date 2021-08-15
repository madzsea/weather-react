import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="format">
      <h2>
        {" "}
        <span id="city">{props.data.city}</span>
        <WeatherTemperature celsius={props.data.temperature} />
        <div>
          {" "}
          <WeatherIcon code={props.data.iconUrl} />
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
