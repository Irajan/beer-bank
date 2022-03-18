import axios from "axios";
import config from "../config";
import { interpolate, unParseQuery } from "../utils/string";

export const fetchBeers = async (query) => {
  const url = `${config.apiUrl}${config.endpoints.beers}${unParseQuery(query)}`;
  const { data } = await axios.get(url);

  return data;
};

export const fetchBeersById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.beer}`;
  const { data } = await axios.get(interpolate(url, { id }));

  return data[0];
};
