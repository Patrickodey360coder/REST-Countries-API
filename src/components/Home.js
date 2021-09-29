import React, { useEffect, useState } from 'react'
import Country from './Country';

function Home() {
  const [error, serError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then((data) => {
        setIsLoaded(true);
        setCountries(data);
      },
      (error) => {
        setIsLoaded(true);
        serError(error);
      }
      )
  }, []);
  console.log(countries)


  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return( 
      <div className="row">
        <Country countries={countries} />
      </div>
    )
  }


}

export default Home
