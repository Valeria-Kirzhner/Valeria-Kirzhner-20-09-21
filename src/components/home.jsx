import React, { useEffect } from "react";
import Search from "./search";
import DayItem from "./dayItem";
import CurrentDayItem from "./currentDayItem";
import FavoriteButton from "./favoriteButton";
import { connect } from "react-redux";

import {
  getCurrentWeather,
  get5DaysForecast,
  toggleDegreeType,
} from "../store/foreacast/forecastAction";

const Home = ({
  cityId,
  currentWeather,
  fiveDaysForecast,
  get5DaysForecast,
  getCurrentWeather,
  toggleDegreeType,
  degreeType,
}) => {
  useEffect(() => {
    bothApi();
  }, []);

  const bothApi = () => {
    getCurrentWeather(cityId);
    get5DaysForecast(cityId);
  };

  const onDegreeTypeToggle = () => {
    toggleDegreeType();
  };

  return (
    <>
      <div className="container">
        <div className="row search">
          <div className="col-md-6 mx-auto">
            <Search />
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-2 ">
            <button className="btn btn-dark" onClick={onDegreeTypeToggle}>
              switch C / F
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <div
              id="weather-window"
              className="card"
              style={{ height: "580px" }}
            >
              {currentWeather.length > 0 && (
                <>
                  <div className="p-3 d-flex">
                    <span className="mr-auto p-2">
                      <CurrentDayItem />
                    </span>
                    <span className="float-right">
                      <FavoriteButton />
                    </span>
                  </div>

                  <div className="card-body mb-4">
                    <h4 className="card-title text-center">
                      {currentWeather[0].WeatherText}
                    </h4>
                  </div>
                </>
              )}

              <div className="container">
                <div className="row d-flex justify-content-center mb-3">
                  {fiveDaysForecast.length > 0 &&
                    fiveDaysForecast.map((item, index) => (
                      <DayItem
                        key={index}
                        item={item}
                        degreeType={degreeType}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentWeather: state.forecast.currentWeather,
  fiveDaysForecast: state.forecast.fiveDaysForecast,
  cityId: state.forecast.cityId,
  degreeType: state.forecast.degreeType,
});

export default connect(mapStateToProps, {
  get5DaysForecast,
  getCurrentWeather,
  toggleDegreeType,
})(Home);
