import {
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_PENDING,
  FETCH_BEERS_REJECTED,
} from "../actions/beers";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
};

export default function fetchBeers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_BEERS_FULFILLED:
      return { ...state, beers: action.payload, isLoading: false };

    case FETCH_BEERS_REJECTED:
      return { ...state, isLoading: false };

    case "Anything":
      console.log(action.payload);
      return state;

    default:
      return state;
  }
}
