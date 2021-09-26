import React, { useEffect, useState } from "react";
import { setCityId, setCityName } from "../store/foreacast/forecastAction";
import { connect } from "react-redux";
import "./styles/favoriteItem.css";
import helpers from "./helpers";

import { getCurrentWeather } from "../store/foreacast/forecastAction";

const FavoriteItem = ({
  cityId,
  cityName,
  fahrenheit,
  celsius,
  degreeType,
  weatherText,
  history,
  setCityId,
  setCityName,
  weatherIcon,
}) => {
  const [iconId, setIconId] = useState("");

  useEffect(() => {
    let icon = weatherIcon;
    icon = helpers.setIconId(icon);
    setIconId(icon);
  }, [weatherIcon]);

  const onFavoriteClick = () => {
    setCityId(cityId);
    setCityName(cityName);
    history.replace("/");
  };
  return (
    <div className="col-sm-6 col-md-3 col-lg-2 m-3">
      <div className="card card-favorite" onClick={onFavoriteClick}>
        <span className="icon">
          <img
            className="img-fluid"
            src={`https://developer.accuweather.com/sites/default/files/${iconId}-s.png`}
            alt="weatherImage"
          />
        </span>
        <div className="title">
          <p>{cityName}</p>
        </div>
        <div className="row">
          <div className=" mx-auto">
            <div className="header">{weatherText}</div>
          </div>
        </div>
        <div className="temp">
          {degreeType ? celsius + " c" : fahrenheit + " F"}
          <sup>&deg;</sup>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  setCityId,
  setCityName,
  getCurrentWeather,
})(FavoriteItem);
