import axios from "axios";
import config from "../config";

export const fetchBeers = async () => {
  const { data } = await axios.get(`${config.apiUrl}${config.endpoints.beers}`);

  return data;
};
