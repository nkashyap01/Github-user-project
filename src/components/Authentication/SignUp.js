import React from 'react';
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../FirebaseConfig';

const SignUp = () => {

  const [name,setName]=useState("");
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");

  const handleRegister=(e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Registration successfull");
  })  
  .catch((error) => {
    console.log(error);
  });
  }


  return (
    <div className='flex h-screen justify-center items-center'>
      {/* <form> */}
        <label>Name:</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" value={name} className="text-blue-500"/>
        <label>email:</label>
        <input onChange={(e)=>setemail(e.target.value)} type="text" value={email} className="text-blue-500"/>
        <label>password:</label>
        <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} className="text-blue-500"/>
        <button onClick={(e)=>{
          handleRegister(e)
        }} className="relative z-50 m-5">Register</button>
      {/* </form> */}
    </div>
  )
}

export default SignUp