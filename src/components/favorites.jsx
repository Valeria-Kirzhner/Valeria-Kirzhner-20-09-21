import React from "react";
import { connect } from "react-redux";
import FavoriteItem from "./favoriteItem";

const Favorites = ({ favoriteList, history, degreeType }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Favorite Cities</h1>
          </div>
        </div>
        <div className="row mt-5">
          {favoriteList.map((item) => (
            <FavoriteItem
              key={item.cityId}
              cityName={item.cityName}
              cityId={item.cityId}
              celsius={item.celsius}
              degreeType={degreeType}
              fahrenheit={item.fahrenheit}
              weatherText={item.WeatherText}
              weatherIcon={item.WeatherIcon}
              history={history}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favoriteList: state.favorites.favoriteList,
  degreeType: state.forecast.degreeType,
});

export default connect(mapStateToProps, {})(Favorites);
