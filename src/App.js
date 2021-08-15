import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sydney" />;
      <a href="https://github.com/madzsea/weather-react" className="link">
        Open Source code
      </a>
    </div>
  );
}
