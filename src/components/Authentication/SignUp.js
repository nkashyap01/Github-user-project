import React from 'react';
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../FirebaseConfig';
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router';


const SignUp = () => {

  const navigate=useNavigate();

  const [name,setName]=useState("");
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  
  const handleRegister=(e)=>{
    e.preventDefault();

    // const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // if(!isValidEmail){
    //   toast.error("Email is not valid", {
    //     position: "top-center",
    //   });
    //   return;
    // }

    // if(!isValidPassword){
    //   toast.error("Password is not valid", {
    //     position: "top-center",
    //   });
    //   return;
    // }
    

    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    
      toast.info("You're Signed Up...", {
        position: "top-center",
      });
      
     navigate('/signin')

  })  
  .catch((error) => {
    console.log(error);
  });
  }


  return (
    <div className="">
    <div className=" flex justify-around">
    <div>
      <img src=" https://github.blog/wp-content/uploads/2019/05/facebook-1200x630-final.png?fit=1200%2C630" className="h-[80vh] w-[100vh]"/>
    </div>
    <div className='flex h-screen justify-center items-center flex-col  '>
      {/* <form> */}
         <div>
        <FiUser className="relative top-[25px] left-1 text-blue-600 "/>
        <input onChange={(e)=>setName(e.target.value)} type="text" value={name} className="border border-black rounded pl-7 pr-8 py-1 "  placeholder="Enter Your name"/>
       </div>
       <div>
       <MdOutlineEmail className="relative top-[25px] left-1 text-blue-600 " />
        <input onChange={(e)=>setemail(e.target.value)} type="text" value={email} className="pl-7 pr-8 py-1  border border-black rounded" placeholder="Enter your mail"/>
        </div>
        <div>
        <CiLock className="relative top-[25px] left-1  text-blue-900 " />

        
        <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} className="pl-7 pr-8 py-1 border border-black rounded" placeholder="create your Password"/>
        </div>
        <button onClick={(e)=>{
          handleRegister(e)
        }} className="relative z-50 m-5 text-white px-[100px]  py-3 bg-blue-600 rounded-md ">SignUp</button>
      {/* </form> */}

      <p> Already have an account?<span className="text-blue-500"> SignIn</span></p>
    </div>
    
    </div>
    </div>
  )
}

export default SignUp