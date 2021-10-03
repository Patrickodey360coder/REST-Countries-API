import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.div`
-webkit-box-shadow: 0px 4px -6px grey;
-moz-box-shadow: 0px 1px -6px grey;
box-shadow: 0px 1px 1px grey;
`;

function Navbar() {

  return (
      <div className="py-4">
      <NavStyle>
        <div className="container ">
            <div className="row">
              <div className="col">
                <h3>Where in the world?</h3>
              </div>
              <div className="col text-end">
                <h5>Dark Mode</h5>
              </div>
            </div>
        </div> 
        </NavStyle>
      </div>
    
  )
}

export default Navbar
