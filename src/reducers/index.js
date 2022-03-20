import { combineReducers } from "redux";

import beerReducer from "./beers";
import favoriteReducer from "./favorite";

export default combineReducers({
  beers: beerReducer,
  favorite: favoriteReducer,
});
