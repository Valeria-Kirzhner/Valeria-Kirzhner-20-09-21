import {
  ADD_CITY_TO_FAVORITE,
  REMOVE_CITY_FROM_FAVORITE,
} from "./favoritesTypes";

export const addCityToFavorite = (cityData) => (dispatch) => {
  dispatch({
    type: ADD_CITY_TO_FAVORITE,
    payload: cityData,
  });
};

export const removeCityFromFavorite = (cityId) => (dispatch) => {
  dispatch({
    type: REMOVE_CITY_FROM_FAVORITE,
    payload: cityId,
  });
};
