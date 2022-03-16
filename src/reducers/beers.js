import { FETCH_BEERS_FULFILLED, FETCH_BEERS_REJECTED } from "../actions/beers";

function fetchBeers(state = [], action) {
  console.log(action);

  switch (action.type) {
    case FETCH_BEERS_FULFILLED:
      return [...state, ...action.payload];

    case FETCH_BEERS_REJECTED:
      return [];

    default:
      return state;
  }
}

export default fetchBeers;
