import React, { useState, useEffect } from "react";
import getCountries from "./services/getCountries";
import CountryList from "./components/CountryList";
import SearchBtn from "./components/SearchBtn";
import Error from "./components/Error";

function App() {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("asia");

  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries(search).then((data) => {
      setCountries(data);
      if(countries.length === 0){
        setError(true)
        return
      }
      setError(false)
    });
    console.log()
    
  }, [search]);

  return (
    <>
      <SearchBtn setSearch={setSearch}></SearchBtn>
      { error ? <Error/> : <CountryList countriesArray={countries}></CountryList>  }
    </>
  );
}

export default App;
