import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite, removeFromFavorite } from "../../actions/favorite";

function BeerList({ beer, isFavorite }) {
  const dispatch = useDispatch();
  const favoriteBeers = useSelector((store) => store.favorite);

  const [isBeerFavorite, setIsBeerFavorite] = useState(
    favoriteBeers.find(({ id }) => id === beer.id) ? true : false
  );

  function handleClick() {
    isBeerFavorite
      ? dispatch(removeFromFavorite(beer))
      : dispatch(addToFavorite(beer));

    setIsBeerFavorite((favorite) => !favorite);
  }

  return (
    <>
      <Link to={`/beers/${beer.id}`}>
        <h1 className="card__heading">{beer.name}</h1>
      </Link>
      <button onClick={handleClick}>{isBeerFavorite ? "Remove" : "Add"}</button>
      <div
        className="card__img-container"
        style={{ backgroundImage: `url(${beer.image_url})` }}
      />
      <p>{beer.tagline}</p>
    </>
  );
}

export default BeerList;
