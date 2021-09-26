import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import helpers from "./helpers";
import "./styles/currentDayItem.css";

const CurrentDayItem = ({
  cityName,
  WeatherIcon,
  degreeType,
  celsius,
  fahrenheit,
}) => {
  const [iconId, setIconId] = useState(null);

  useEffect(() => {
    // to able to get the icons I need to add 0 when the number is single (example 1 -> 01)
    let icon = WeatherIcon;
    icon = helpers.setIconId(icon);
    setIconId(icon);
  }, [WeatherIcon]);

  return (
    celsius && (
      <div className="d-flex">
        <div className=" mb-3" style={{ width: "150px", height: "85px" }}>
          <img
            id="current-weather-icon"
            className="img-fluid"
            style={{ width: "50" }}
            src={`https://developer.accuweather.com/sites/default/files/${iconId}-s.png`}
            alt="weatherImage"
          />
        </div>
        <div className="ml-2 mt-3">
          <p className="card-title">{cityName}</p>
          <p className="card-text">
            {degreeType ? celsius + " c" : fahrenheit + " F"}
          </p>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  cityName: state.forecast.cityName,
  degreeType: state.forecast.degreeType,
  celsius: state.forecast.currentWeather[0].Temperature.Metric.Value,
  fahrenheit: state.forecast.currentWeather[0].Temperature.Imperial.Value,
  WeatherIcon: state.forecast.currentWeather[0].WeatherIcon,
});

export default connect(mapStateToProps, {})(CurrentDayItem);
