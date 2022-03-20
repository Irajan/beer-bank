import React from "react";
import { useSelector } from "react-redux";
import BeerList from "./BeerList";

function Favorite(props) {
  const favoriteBeers = useSelector((store) => store.favorite);
  const isFavoriteEmpty = favoriteBeers.length === 0;

  return (
    <div className="container">
      <button onClick={props.history.goBack}>Back</button>

      {isFavoriteEmpty ? (
        <h1>You haven't added your favorite beers</h1>
      ) : (
        favoriteBeers.map((beer) => (
          <div key={beer.id} className="card">
            <BeerList beer={beer} isFavorite={true} />
          </div>
        ))
      )}
    </div>
  );
}

export default Favorite;
