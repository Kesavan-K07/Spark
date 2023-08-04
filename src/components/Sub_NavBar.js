// import React from 'react';
// import './Sub_NavBar.css'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendarCheck, faCalendarXmark, faCaretDown, faHome, faHomeAlt, faIdCard, faMessage, faPeopleGroup, faSearch, faSquare, faSquarePlus, faUserGroup } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

// function Sub_NavBar() {
//   return (
//     <div className="container-fluid bg-dark">
//       <div className="row">
//       <div className="col-lg-12">
//       <Navbar id='overAll' collapseOnSelect expand="lg" className="bg-dark">
//       <Container style={{display:'flex', justifyContent:'space-between'}}>
//         <div>
//           <Link to='/Home' style={{textDecoration:'none'}}>
//           <Navbar.Brand id='title' href="#home" className='text-warning fw-bold'>Spark 
//         <span className='text-light mx-3'>Connect</span>
//         </Navbar.Brand>
//           </Link>
        
//         </div>

//         <Navbar.Toggle id='toggle' className='bg-warning' aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav ">
//           <div>
//           <Nav id='NavList' className="mx-5">
//             <Nav.Link>
//               <Link id='ttl' to="/Home" className='text-warning  mx-4'>
//               <FontAwesomeIcon id='add_btn' className='text-warning' icon={faHome}/> 
//               <p style={{fontSize:'2.2vh'}}>Home</p>  
//               </Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link id='ttl' to="/Community" className='text-warning mx-4'>
//               <FontAwesomeIcon id='add_btn' className='text-warning' icon={faUserGroup}/> 
//               <p style={{fontSize:'2.2vh'}}>Community</p>  
//               </Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link id='ttl' to="/Notification" className='text-warning mx-4'>
//               <FontAwesomeIcon id='add_btn' className='text-warning' icon={faMessage}/> 
                
//               <p style={{fontSize:'2.2vh'}}>Notification</p> 
//               </Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link id='ttl' to='/Events' className='text-warning mx-4'>
//               <FontAwesomeIcon id='add_btn' className='text-warning' icon={faCalendarCheck}/> 
//               <p style={{fontSize:'2.2vh'}}>Events</p>
//               </Link>
//               </Nav.Link>

//             <Nav.Link>
//               <Link id='ttl' to='/About' className='text-warning mx-4'>
//               <FontAwesomeIcon id='add_btn' className='text-warning' icon={faIdCard}/> 
              
//               <p style={{fontSize:'2.2vh'}}>About</p>
//               </Link>
//             </Nav.Link>
//           </Nav>
//           </div>

//           <div>
//           <Nav>
//             <Nav.Link eventKey={2} href="#Profile"  className='text-warning fs-4 mx-4'>
//               <Link to='/Profile'>
//               <img id='nav_img' style={{ width: 60, height: 60, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="profile pic"/>
//               </Link>
//             </Nav.Link>
//           </Nav>
//           </div>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sub_NavBar;