import React, { useEffect, useState } from 'react'
import Country from './Country';

function Home() {
  const api1 = "https://www.anapioficeandfire.com/api/books";
  const api2 = "https://restcountries.com/v3/all";
  const [error, serError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(api2)
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
