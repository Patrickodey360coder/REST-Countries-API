import React from 'react'

function Movie(props) {
  const {countries} = props;
  console.log(countries.map((index) => (index)));

  return (
    countries.map((country, index) => (
      <div className="col-3" key={index}>
        <div className="col">
          <div className="card my-1">
            <img src={country.flags[1]} className="card-img-top" alt="name" />
            <div className="card-body">
              <h6 className="card-title">{country.name.common}</h6>
              <p className="card-subtitle"><b>Population</b>: {country.population.toLocaleString()}</p>
              <p className="card-text"><b>Region</b>: {country.region}</p>
              <p className="card-text"><b>Capital</b>: {country.capital}</p>
          </div>
          </div>
        </div>
      </div>
    ))

  ) 
}

  



export default Movie



