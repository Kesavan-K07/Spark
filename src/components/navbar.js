import React from 'react'
import { useState } from 'react';

// import "bootstrap/dist/css/bootstrap"
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';



const Navbar = () => {

    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    
  return (
    <>

    <div>
    <MDBNavbar expand='lg' dark bgColor='dark' className='position-sticky'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'><span className='text-warning fs-2 fw-bolder'>Spark</span><span className='text-white fs-2 fw-bolder'>Connect..</span></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
          <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-5 mb-lg-0' id="navbar">
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#' className="border-right">
                 Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Learning</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <button className="btn btn-warning " id="CA" >Create Account</button>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      </div>
    
    </>
  )
}

export default Navbar