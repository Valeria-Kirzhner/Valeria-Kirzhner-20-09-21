import {
  ADD_CITY_TO_FAVORITE,
  REMOVE_CITY_FROM_FAVORITE,
} from "./favoritesTypes";

const intialState = {
  favoriteList: [],
};

const favoritesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_CITY_TO_FAVORITE:
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList],
      };
    case REMOVE_CITY_FROM_FAVORITE:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (city) => city.cityId !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
