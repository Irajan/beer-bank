import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchBeers from "../../actions/beers";
import Loading from "../common/Loading";
import BeerList from "./BeerList";

// --> action
//        --->  action
//        --- > action

function BeerInfiniteList() {
  const dispatch = useDispatch();

  const beers = useSelector((store) => store.beers);
  const isLoading = useSelector((store) => store.isLoading);
  const inputRef = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const lastElementRef = useCallback(
    (node) => {
      // It is service provided by browser API to detect any intersecting elements
      // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
      const observer = new IntersectionObserver(([lastElement]) => {
        console.log(isLoading);

        if (lastElement.isIntersecting && !isLoading) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });

      if (node) {
        observer.observe(node);
      }
    },
    [isLoading]
  );

  useEffect(() => {
    dispatch(fetchBeers({ pageNumber, searchQuery }));
  }, [dispatch, pageNumber, searchQuery]);

  function handleSearch() {
    setSearchQuery(inputRef.current.value);
  }

  return (
    <div>
      <div className="header">
        <h3 className="header__heading">The Beer Bank</h3>
        <p className="header__description">Find Your favorite beer here</p>
        <input ref={inputRef} className="header__input" type="search" />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="container">
        {beers.map((beer, index) =>
          index === beers.length - 1 ? (
            <div ref={lastElementRef} key={beer.id} className="card">
              <BeerList beer={beer} />
            </div>
          ) : (
            <div key={beer.id} className="card">
              <BeerList beer={beer} />
            </div>
          )
        )}
        {isLoading && (
          <div className="card p-relative">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default BeerInfiniteList;
