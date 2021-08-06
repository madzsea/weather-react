import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Location from "./Location";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Location />
    <a href="https://github.com/madzsea/weather-react" className="link">
      Open Source code
    </a>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
