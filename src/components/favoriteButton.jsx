import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  addCityToFavorite,
  removeCityFromFavorite,
} from "../store/favorites/favoritesAction";

const FavoriteButton = ({
  addCityToFavorite,
  removeCityFromFavorite,
  cityId,
  cityName,
  currentWeather,
  favoriteList,
}) => {
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    const isCityExists = () =>
      favoriteList.filter((item) => item.cityId === cityId).length !== 0; // if length is equal to zero - will return false.

    setIsFavorite(isCityExists());
  }, [cityId, favoriteList]);

  const handelAddToFavorite = () => {
    if (isFavorite) {
      removeCityFromFavorite(cityId);
    } else {
      const { WeatherText, WeatherIcon } = currentWeather[0];
      const celsius = currentWeather[0].Temperature.Metric.Value;
      const fahrenheit = currentWeather[0].Temperature.Imperial.Value;

      addCityToFavorite({
        cityId,
        cityName,
        WeatherText,
        celsius,
        fahrenheit,
        WeatherIcon,
      });
    }
  };

  return (
    <>
      <button
        className="favorite-btn"
        onClick={handelAddToFavorite}
        className={"btn " + (isFavorite ? "btn-danger" : "btn-secondary")}
      >
        <i className="fas fa-heart mr-2"></i>
        {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentWeather: state.forecast.currentWeather,
  cityName: state.forecast.cityName,
  cityId: state.forecast.cityId,
  favoriteList: state.favorites.favoriteList,
});

export default connect(mapStateToProps, {
  addCityToFavorite,
  removeCityFromFavorite,
})(FavoriteButton);
