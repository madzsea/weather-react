import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          <h3 className="forecast-box">
            <div className="weather-forecast">Thu</div>
            <div>
              <WeatherIcon code="01d" />
            </div>
            <span className="weather-forecast-min"> 10°C</span> |{" "}
            <span className="weather-forecast-max"> 19°C</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
