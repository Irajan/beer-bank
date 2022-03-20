import {
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_PENDING,
  FETCH_BEERS_REJECTED,
  RESET_BEERS,
} from "../actions/beers";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  isNoMore: false,
};

export default function fetchBeers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_BEERS_FULFILLED:
      return action.payload.length === 0
        ? {
            ...state,
            isNoMore: true,
            isLoading: false,
          }
        : {
            ...state,
            list: [...state.list, ...action.payload],
            isLoading: false,
          };

    case FETCH_BEERS_REJECTED:
      return { ...state, isLoading: false };

    case RESET_BEERS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
