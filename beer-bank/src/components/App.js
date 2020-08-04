import React from "react";
import BeerInfiniteList from "./views/BeerInfiniteList";

// Infinite Scroll -->   /beers , /
// Beer -->       /beers/id
// Favorites --> /beers/favorite

function App() {
  return (
    <div>
      <BeerInfiniteList />
    </div>
  );
}

export default App;
