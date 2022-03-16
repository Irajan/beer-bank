import React from "react";

function Beer(props) {
  const { params } = props.match;

  return <h1>Beer {params.id}</h1>;
}

export default Beer;
