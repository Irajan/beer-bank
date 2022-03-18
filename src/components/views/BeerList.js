import React from "react";
import { Link } from "react-router-dom";

function BeerList({ beer }) {
  return (
    <>
      <Link to={`/beers/${beer.id}`}>
        <h1 className="card__heading">{beer.name}</h1>
      </Link>
      <div
        className="card__img-container"
        style={{ backgroundImage: `url(${beer.image_url})` }}
      />
      <p>{beer.tagline}</p>
    </>
  );
}

export default BeerList;
