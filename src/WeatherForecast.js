import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "e70f39679296042a105ae9d2c915332b";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
