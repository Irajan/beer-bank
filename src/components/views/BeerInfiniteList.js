import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FAVORITE } from "../../constants/routes";

import fetchBeers, { resetBeers } from "../../actions/beers";
import Loading from "../common/Loading";
import BeerList from "./BeerList";

// --> action
//        --->  action
//        --- > action
//  []
// [1,5,6,2,3]  ===>

function BeerInfiniteList() {
  const dispatch = useDispatch();

  const beers = useSelector((store) => store.beers.list);
  const isLoading = useSelector((store) => store.beers.isLoading);
  const isNoMore = useSelector((store) => store.beers.isNoMore);

  const inputRef = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const lastElementRef = useCallback(
    (node) => {
      // It is service provided by browser API to detect any intersecting elements
      // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
      const observer = new IntersectionObserver(([lastElement]) => {
        if (lastElement.isIntersecting && !isLoading && !isNoMore) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });

      if (isNoMore) {
        observer.disconnect();
      }

      if (node) {
        observer.observe(node);
      }
    },
    [isLoading, isNoMore]
  );

  useEffect(() => {
    dispatch(fetchBeers({ pageNumber, searchQuery }));
  }, [dispatch, pageNumber, searchQuery]);

  function handleSearch() {
    dispatch(resetBeers());
    setSearchQuery(inputRef.current.value);
  }

  return (
    <div>
      <div className="header">
        <button>
          <Link to={FAVORITE}>Favorite</Link>
        </button>
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
