import React, {useState, useEffect } from 'react';

function Form() {
  const [value, setValue] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then( (res) => (res.json))
      .then( data => {
        setValue(data)
      })
  })

  console.log(value)

  return (
    <div className="row mb-5 mt-2">
      <div className="col-md-6">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search for a country..." />
        </div>
      </div>
      <div className="col-md-3">

      </div>
      <div className="col-md-3">
        <select class="form-control form-control">
          <option>Large select</option>
        </select>
      </div>
    </div>
  )
}

export default Form
