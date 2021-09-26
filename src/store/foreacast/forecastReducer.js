import {
  GET_CURRENT_WEATHER,
  GET_5_DAYS_FORECAST,
  SET_CITY_ID,
  SET_CITY_NAME,
  TOGGLE_DEGREE_TYPE,
} from "./forecastTypes";

const intialState = {
  fiveDaysForecast: [],
  currentWeather: [],
  degreeType: true, //false -> fahrenheit, true -> celsius
  cityId: "215854",
  cityName: "Tel Aviv",
};

const forecastReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case GET_5_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForecast: action.payload.map((item) => {
          const celsius = item.Temperature.Maximum.Value;
          return {
            ...item,
            celsius,
            fahrenheit: ((celsius * 9) / 5 + 32).toFixed(2),
          };
        }),
      };
    case TOGGLE_DEGREE_TYPE:
      return {
        ...state,
        degreeType: !state.degreeType,
      };
    case SET_CITY_ID:
      return {
        ...state,
        cityId: action.payload,
      };
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload,
      };
    default:
      return state;
  }
};

export default forecastReducer;
