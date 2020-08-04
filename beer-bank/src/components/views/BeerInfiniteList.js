import React, { useState, useEffect } from "react";

import * as beerService from "../../services/beer";

function BeerInfiniteList() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBeers() {
      try {
        setIsLoading(true);
        const data = await beerService.fetchBeers();

        setBeers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBeers();
  }, []);

  return (
    <div>
      <div>
        <h3>The Beer Bank</h3>
        <p>Find Your favorite beer here</p>
        <input type="search" />
      </div>

      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          {beers.map((beer) => (
            <div key={beer.id}>
              <h1>{beer.name}</h1>
              <p>{beer.tagline}</p>
              <img src={beer.image_url} alt={beer.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BeerInfiniteList;
