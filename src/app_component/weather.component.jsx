import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        <h1 className="py-2">{props.celsius}&deg;</h1>
        {/* show max min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}
export default Weather;
