import React from "react";
import WeatherIcon from "./WeatherIcon";

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
    <div>
      <div className="weather-forecast">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <span className="weather-forecast-min"> {minTemperature()}</span> |{" "}
      <span className="weather-forecast-max"> {maxTemperature()}</span>
    </div>
  );
}
