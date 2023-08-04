// import axios from "axios";
import React from "react";
import  "../components/main.css";
import { useState,useEffect} from "react";
import { Link, json } from "react-router-dom";
import Navbar from "./navbar";



  //   const connect=new FormData(action.target)

  //  const value={Headers:{"enctybe":"multipart/form-data"}}
  //  axios.post("http://localhost:3005/insertdata", connect, value)
  //  .then(function(res){
  //         if(res){
  //          alert("YOUR DATA UPDATE");
  //         //  window.location.href='/';
  //         }
  //         else{
  //          alert("NOT UPDATE")
  //           // window.location.reload();
  //         }
  //   })
  //   .catch(function(error){
  //    if(error){
  //      alert(error)
  //    }
    // })
  // }

// <Navbar/>
const Login = () => {



const [email,setEmail]=useState("");
const [pass,setpass]=useState("");


  
  const handlechange=(action)=>{
    console.log(action.target);
    
  }

  const handlesubmit=(action)=>{
    action.PreventDefault();
    console.log();
  }


// /-----------------------------------------------------------------/
function validateForm() {
  // Check if the First Name is an Empty string or not.

  if (firstName.length == 0) {
    alert('Invalid Form, First Name can not be empty')
    return
  }

  // Check if the Email is an Empty string or not.

  if (email.length == 0) {
    alert('Invalid Form, Email Address can not be empty')
    return
  }

  // check if the password follows constraints or not.

  // if password length is less than 8 characters, alert invalid form.

  if (password.length < 8) {
    alert(
      'Invalid Form, Password must contain greater than or equal to 8 characters.',
    )
    return
  }

  // variable to count upper case characters in the password.
  let countUpperCase = 0
  // variable to count lowercase characters in the password.
  let countLowerCase = 0
  // variable to count digit characters in the password.
  let countDigit = 0
  // variable to count special characters in the password.
  let countSpecialCharacters = 0

  for (let i = 0; i < password.length; i++) {
    const specialChars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '[',
      '{',
      ']',
      '}',
      ':',
      ';',
      '<',
      '>',
    ]

    if (specialChars.includes(password[i])) {
      // this means that the character is special, so increment countSpecialCharacters
      countSpecialCharacters++
    } else if (!isNaN(password[i] * 1)) {
      // this means that the character is a digit, so increment countDigit
      countDigit++
    } else {
      if (password[i] == password[i].toUpperCase()) {
        // this means that the character is an upper case character, so increment countUpperCase
        countUpperCase++
      }
      if (password[i] == password[i].toLowerCase()) {
        // this means that the character is lowercase, so increment countUpperCase
        countLowerCase++
      }
    }
  }

  if (countLowerCase == 0) {
    // invalid form, 0 lowercase characters
    alert('Invalid Form, 0 lower case characters in password')
    return
  }

  if (countUpperCase == 0) {
    // invalid form, 0 upper case characters
    alert('Invalid Form, 0 upper case characters in password')
    return
  }

  if (countDigit == 0) {
    // invalid form, 0 digit characters
    alert('Invalid Form, 0 digit characters in password')
    return
  }

  if (countSpecialCharacters == 0) {
    // invalid form, 0 special characters characters
    alert('Invalid Form, 0 special characters in password')
    return
  }

  // if all the conditions are valid, this means that the form is valid

  alert('Form is valid')
}
// /------------------------------/ 











  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:"#000"}}>
    <div className="continer">
    {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
    <div className="row">
    <div className='col-lg-4'></div>
    
    <div className="col-lg-4 border border-3 border-warning mt-5 bg-dark bg-opacity-8 " id="box">
   
    <form onSubmit={handlesubmit}>    
    <p id="head"><span className="fs-2" style={{color:'#fcb713'}}>Spark</span><span className="fs-3" style={{color:'white'}}>Connect </span></p>
    <p id="head" className="text-white ">Welcome to SparkConnect Community</p>
    <div>   
     <span className="text-white"><lable  for="email">Email or Phoneno</lable></span> 
   
     <input value={email} 
           onChange={(action)=>setEmail(action.target.value)} 
           type="email" 
           name='email' 
           id='email' 
           placeholder='Enter your Emailid' 
           className='form-control mt-3 mb-4' /> 
    </div>
   
   <div>
    <p className="text-white"><lable for="password ">Password*</lable></p>
   
    <input value={pass} 
           onChange={(action)=>setpass(action.target.value)} 
           type="password" 
           name='password'  
           id='password' 
           placeholder='Enter the Password' 
           className='form-control mt-3'/>        
   </div>
  


    <a className="fpassword mt-5" style={{alignContent:"center"}} href="/">Forgot Password?</a>
   
    <div className="btn">
   
    <button type="submit" id="butt" className="btn btn-warning btn-lg ms-3 mt-5">Login</button>
   
   <Link to="/register"> 
   <button id="butt" className="btn btn-warning btn-lg ms-5 mt-5">Register</button>
   </Link>
   
    </div>
    </form>
    
    </div>
    <div className="col-lg-4"></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login