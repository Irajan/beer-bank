import React from "react";
import BeerInfiniteList from "./views/BeerInfiniteList";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Beer from "./views/Beer";
import Favorite from "./views/Favorite";
import * as routes from "../constants/routes";

// Infinite Scroll -->   /beers , /
// Beer -->       /beers/id
// Favorites --> /beers/favorite

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.BEERS} component={BeerInfiniteList} />
        <Route exact path={routes.FAVORITE} component={Favorite} />
        <Route exact path={routes.BEER} component={Beer} />
        <Redirect to={routes.BEERS} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
