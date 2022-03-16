import axios from "axios";
import config from "../config";
import pinterpolate from "pinterpolate";

export const fetchBeers = async () => {
  const url = `${config.apiUrl}${config.endpoints.beers}`;
  const { data } = await axios.get(url);

  return data;
};

export const fetchBeersById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.beer}`;

  const { data } = await axios.get(pinterpolate(url, { id }));

  return data[0];
};
