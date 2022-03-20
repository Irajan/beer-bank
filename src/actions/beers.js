import * as beerService from "../services/beer";

export const RESET_BEERS = "RESET_BEERS";

export const FETCH_BEERS = "FETCH_BEERS";
export const FETCH_BEERS_PENDING = "FETCH_BEERS_PENDING";
export const FETCH_BEERS_REJECTED = "FETCH_BEERS_REJECTED";
export const FETCH_BEERS_FULFILLED = "FETCH_BEERS_FULFILLED";

// pending , rejected , fulfilled

export default function fetchBeers(params) {
  const { pageNumber: page, searchQuery: beer_name } = params;

  return async function (dispatch) {
    dispatch(fetchBeersPending());

    try {
      const data = await beerService.fetchBeers({ page, beer_name });

      dispatch(fetchBeersFulfilled(data));
    } catch (err) {
      dispatch(fetchBeersRejected(err));
    }
  };
}

function fetchBeersFulfilled(beers) {
  return {
    type: FETCH_BEERS_FULFILLED,
    payload: beers,
  };
}

function fetchBeersRejected(err) {
  return {
    type: FETCH_BEERS_REJECTED,
    payload: err,
  };
}

function fetchBeersPending() {
  return {
    type: FETCH_BEERS_PENDING,
  };
}

export function resetBeers() {
  return {
    type: RESET_BEERS,
  };
}
