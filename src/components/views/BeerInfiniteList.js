import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import fetchBeers from "../../actions/beers";

// --> action
//        --->  action
//        --- > action

function BeerInfiniteList() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const beers = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchBeers);
  }, [dispatch]);

  return (
    <div>
      <div className="header">
        <h3 className="header__heading">The Beer Bank</h3>
        <p className="header__description">Find Your favorite beer here</p>
        <input className="header__input" type="search" />
      </div>

      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container">
          {beers.map((beer) => (
            <div key={beer.id} className="card">
              <Link to={`/beers/${beer.id}`}>
                <h1 className="card__heading">{beer.name}</h1>
              </Link>
              <div
                className="card__img-container"
                style={{ backgroundImage: `url(${beer.image_url})` }}
              />
              <p>{beer.tagline}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BeerInfiniteList;
