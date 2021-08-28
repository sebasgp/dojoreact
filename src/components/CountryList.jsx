import React from 'react';
import CountryCard from './CountryCard';


function CountryList({countriesArray}) {
    return (
        <div>
            {countriesArray.map(countrie => {
                return(
                    <CountryCard key={countrie.alpha2Code} name={countrie.name} capital={countrie.capital} flag={countrie.flag}></CountryCard>
                );
            })}
        </div>
    )
}

export default CountryList
