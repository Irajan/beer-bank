import React from "react";
import thunk from "redux-thunk";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";

import ReactDOM from "react-dom";

import "./public";
import fetchBeersReducer from "./reducers/beers";
import { Provider } from "react-redux";

const store = createStore(
  fetchBeersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
