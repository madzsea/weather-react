import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="container-forecast">
      <div className="forecast-day">{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="temperature-forecast">
        <span className="weather-forecast-min"> {minTemperature()}</span> |{" "}
        <span className="weather-forecast-max"> {maxTemperature()}</span>
      </div>
    </div>
  );
}
