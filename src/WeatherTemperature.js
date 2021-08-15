import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <div className="temperature-description">
          <span id="temperature">{Math.round(props.celsius)} </span>
          <span id="units">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <div className="temperature-description">
          <span id="temperature">{Math.round(fahrenheit)}</span>
          <span id="units">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </span>
    );
  }
}
