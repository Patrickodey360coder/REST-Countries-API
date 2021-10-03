import React from 'react'

function Form() {
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
