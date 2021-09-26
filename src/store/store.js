import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import forecastReducer from "./foreacast/forecastReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  forecast: forecastReducer,
  favorites: favoritesReducer,
});

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
