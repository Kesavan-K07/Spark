import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from './components/login'
import Navbar from './components/navbar';
import { Register } from './components/register';

// // import Event from './components/event';
// // import Modal from './components/modal';
// // import Front from './components/front';
// import Strategy from './components/features/Strategy';
// import Contect from './components/features/Contect';
// import ModalDialog from './components/modal';
// import Sub_NavBar from './components/Sub_NavBar';
// import CreatePost from './components/CreatePost';
// import { Carousel } from 'react-bootstrap';
// import SideBar from './components/SideBar';
// import Notification from './components/Notification';
// import Post from './components/Post';
// import Status from './components/Status';








function App(){

 
  return (
    <>
    
   <BrowserRouter>
  <Routes> 
    <Route path='/' element={<Login/>}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/Register' element={<Register/> } />
    {/* <Route path='' element={<Event/>}/> */}
    {/* <Route path='/Modal' element={<Modal/>}/> */}
    {/* <Route path ='/' element={<Front/>}/> */}
    {/* <Route path='/' element={<Strategy/>}/> */}
    {/* <Route path='/'  element={<Contect/>}/> */}
    {/* <Route path='/' element={<ModalDialog/>}/> */}
    {/* <Route path='/' element={<Sub_NavBar/>}/>
    <Route path='./' element={<CreatePost/>}/>
  
    <Route path='/' element={<Carousel/>}/>
    <Route path='/' element={<SideBar/>}/>
    <Route path='/' element={<Post/>}/>
    <Route path='/' element={<Status/>}/>
    <Route path='/' element={<Notification/>}/> */}
    
  </Routes>
  </BrowserRouter> 

  
    </>
  )
}
export default App;