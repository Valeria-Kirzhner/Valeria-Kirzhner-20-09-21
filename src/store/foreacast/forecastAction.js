import weatherService from "../../services/weatherService";

import {
  GET_CURRENT_WEATHER,
  GET_5_DAYS_FORECAST,
  SET_CITY_NAME,
  SET_CITY_ID,
  TOGGLE_DEGREE_TYPE,
} from "./forecastTypes";

export const setCityName = (cityName) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CITY_NAME,
      payload: cityName,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCityId = (cityId) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CITY_ID,
      payload: cityId,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentWeather = (cityKey) => async (dispatch) => {
  try {
    const { data } = await weatherService.getCurrentWeather(cityKey);
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const get5DaysForecast = (cityKey) => async (dispatch) => {
  try {
    const { data } = await weatherService.get5DaysForecast(cityKey);

    dispatch({
      type: GET_5_DAYS_FORECAST,
      payload: data.DailyForecasts,
    });
  } catch (err) {
    console.log(err);
  }
};
export const toggleDegreeType = () => (dispatch) => {
  dispatch({
    type: TOGGLE_DEGREE_TYPE,
  });
};
