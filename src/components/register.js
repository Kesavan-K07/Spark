import React from 'react'
import { useState } from 'react'
import "../components/main.css"
import Navbar from './navbar'





export const Register = (props) => {

const [Name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const handlesubmit=(action)=>{
  action.preventDefault();
  console.log(email)
}

  return (
    <>
    <Navbar/>
     <div className='continer bg-black '>
      <div className='row'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4 border-3 border border-warning mt-5 bg-dark bg-opacity-8 '  id="box">
          <form onSubmit={handlesubmit} >
            <div className='' id=''>
               <img className='round-pil' src='' alt=''/>
               <p id='head' className='text-white'>Create Account</p>
            </div>
            <div>
              <p className='text-white'>Name</p>
              <input value={Name} onChange={(action)=>setName(action.target.value)} name='Name' id='Name'    className='form-control mt-3 mb-4'      />
              <p className='text-white'>Email</p>
              <input value={email} onChange={(action)=>setEmail(action.target.value)} type="email" name='email'  className='form-control mt-3 mb-4'/>
              <p className='text-white'>Password</p>
              <input value={password} onChange={(action)=>setPassword(action.target.value)} type="password" name='password'  className='form-control mt-3 mb-4'/>
            </div>
            <button id="but" onClick={()=>props.onFormSwitch("login")} className="btn btn-warning btn-lg ms-5 ">Register</button>
          </form>
        </div>
        <div className='col-lg-4'></div>
      </div>

     </div>
    
    </>
  )
}
