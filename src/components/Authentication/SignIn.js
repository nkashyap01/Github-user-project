import React from 'react';
import { useState} from 'react'
import {  signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';
import auth from '../../FirebaseConfig';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";

import { CiLock } from "react-icons/ci";

const SignIn = () => {
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const navigate=useNavigate();


  const provider=new GoogleAuthProvider();
  const gitprovider=new GithubAuthProvider();

  const handleGithub=()=>{
    signInWithPopup(auth, gitprovider)
  .then((result) => {
    
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
 
    const user = result.user;
    console.log(user);
    toast.info("You're signed in with github", {
      position: "top-center",
    });
   navigate('/users')
    
  }).catch((error) => {
    toast.error("Failed while login with github", {
      position: "top-center",
    });
     
  });


  }

  const handleGoogle=()=>{
    signInWithPopup(auth, provider)

  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    toast.info("You're signed in with google", {
      position: "top-center",
    });
   navigate('/users')
    
  }).catch((error) => {
    
    toast.error("Failed while login with google", {
      position: "top-center",
    });
  });

  }
  

  const handleLogin=(e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    toast.info("You're Signed in...", {
      position: "top-center",
    });
   navigate('/users')

  })  
  .catch((error) => {
    console.log(error);
  });
  }


  return (
    <div className=" flex justify-around">
    <div>
    <img src=" https://github.blog/wp-content/uploads/2019/05/facebook-1200x630-final.png?fit=1200%2C630" className="h-[80vh] w-[100vh]"/>
  </div>
    <div className='flex h-screen justify-center items-center flex-col'>
      {/* <form> */}
        <div>
        <MdOutlineEmail className="relative top-[25px] left-1 text-blue-600 " />
       
        <input onChange={(e)=>setemail(e.target.value)} type="text" value={email} className="pl-7 pr-8 py-1  border border-black rounded" placeholder="Enter your mail"/>
        </div>
        <div>
        <CiLock className="relative top-[25px] left-1  text-blue-900 " />
        <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} className="pl-7 pr-8 py-1 border border-black rounded" placeholder="Type your Password"/>
        </div>
        <button onClick={(e)=>{
          handleLogin(e)
        }} className="relative z-50 m-5 text-white px-[100px]  py-3 bg-blue-600 rounded-md">SignIn</button>
        <button onClick={()=>handleGoogle()}>Sign in with Google</button>
        <button onClick={()=>handleGithub()}>Sign in with Github</button>

        
      <p> Don't have an account?<span className="text-blue-500"> SignUp</span></p>
      {/* </form> */}
    </div>
    </div>
  )
}

export default SignIn;