import React from 'react'

function Movie(props) {
  const {countries} = props
  return (
    countries.map((item, index) => {
      return (
        <h1>{item}</h1>
      )
    })
  )
}

{/* <div className="col-3">
<div className="col">
  <div className="card my-1">
    <img src="" className="card-img-top" alt="name" />
    <div className="card-body">
      <h5 className="card-title">Hello</h5>
      <h6 className="card-subtitle mb-2 text-muted">region</h6>
      <p className="card-text">capital</p>
    </div>
  </div>
</div>
</div> */}
export default Movie



