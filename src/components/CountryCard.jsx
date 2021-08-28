import React from "react";

function CountryCard({ name, flag, capital }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{capital}</h2>
      <img src={flag} />
    </div>
  );
}

export default CountryCard;
