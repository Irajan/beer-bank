const config = {
  apiUrl: process.env.REACT_APP_API_URL,

  endpoints: {
    beers: "v2/beers",
    beer: "v2/beers/:id",
  },
};

export default config;
