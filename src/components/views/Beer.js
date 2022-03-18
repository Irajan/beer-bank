import React, { useEffect, useState } from "react";

import * as beerService from "../../services/beer";
import Loading from "../common/Loading";

function Beer(props) {
  const [beer, setBeer] = useState({});
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setIsLoading(true);
        const beer = await beerService.fetchBeersById(id);
        setIsLoading(false);
        setBeer(beer);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBeers();
  }, []);

  return !isLoading ? (
    <div className="description-container">
      <div className="description__left">
        <div className="description__img">
          <img src={beer.image_url} />
        </div>
      </div>
      <div className="description__right">
        <h1 className="description__heading">{beer.name}</h1>
        <p className="description__tagline">{beer.tagline}</p>
        <ul>
          <li className="description__measure">
            <b>IBU:</b> {beer.ibu}
          </li>
          <li className="description__measure">
            <b>IBU:</b> {beer.ibu}
          </li>
          <li className="description__measure">
            <b>IBU:</b> {beer.ibu}
          </li>
        </ul>
        <p className="description__paragraph">{beer.description}</p>
        <h3 className="description__sub-heading">Best served with :</h3>
        <ul>
          {beer.food_pairing?.map((item, index) => (
            <li className="description__item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Beer;
