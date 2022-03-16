import * as beerService from "../services/beer";

export const FETCH_BEERS = "FETCH_BEERS";
export const FETCH_BEERS_PENDING = "FETCH_BEERS_PENDING";
export const FETCH_BEERS_REJECTED = "FETCH_BEERS_REJECTED";
export const FETCH_BEERS_FULFILLED = "FETCH_BEERS_FULFILLED";

// pending , rejected , fulfilled

export default function fetchBeers(dispatch) {
  dispatch(fetchBeersPending);
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

async function fetchBeersPending(dispatch) {
  try {
    const data = await beerService.fetchBeers();

    dispatch(fetchBeersFulfilled(data));
  } catch (err) {
    dispatch(fetchBeersRejected(err));
  }
}
