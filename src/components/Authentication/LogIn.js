import React from 'react';
import { useState} from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../FirebaseConfig';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LogIn = () => {
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    toast.success("You're logged in...", {
      position: "top-center",
      theme: "dark",
    });
   navigate('/');



  })  
  .catch((error) => {
    console.log(error);
  });
  }


  return (
    <div className='flex h-screen justify-center items-center'>
      {/* <form> */}
        <label>email:</label>
        <input onChange={(e)=>setemail(e.target.value)} type="text" value={email} className="text-blue-500"/>
        <label>password:</label>
        <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} className="text-blue-500"/>
        <button onClick={(e)=>{
          handleLogin(e)
        }} className="relative z-50 m-5">Register</button>
      {/* </form> */}
    </div>
  )
}

export default LogIn