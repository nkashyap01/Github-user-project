import React from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../../FirebaseConfig";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";

import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store";
import { MdKeyboardArrowRight } from "react-icons/md";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const name = useSelector((store) => store.github.name);

  const dispatch = useDispatch();

  const provider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();

  const handleGithub = () => {
    signInWithPopup(auth, gitprovider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        // dispatch(setName(user.reloadUserInfo.screenName));

        sessionStorage.setItem('name',user.reloadUserInfo.screenName);


        navigate("/mainpage");

        toast.info("You're signed in with github", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error("Failed while login with github", {
          position: "top-center",
        });
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        toast.info("You're signed in with google", {
          position: "top-center",
        });
        navigate("/users");
      })
      .catch((error) => {
        toast.error("Failed while login with google", {
          position: "top-center",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.info("You're Signed in...", {
          position: "top-center",
        });
        navigate("/users");
      })
      .catch((error) => {
        
      })
  };

  return (
    <div className=" flex justify-around items-center bg-[#0D1117] ">
      
      <div className=" w-8/12 h-[88vh] text-white justify-center flex items-center flex-col ">
      <h1 className="text-8xl font-medium"> Let's build from here
</h1>
<p className="text-gray-500 text-3xl pt-6">The world's leading AI-powered developer platform.</p> 
<div className="pt-24 flex">

  <input type="text" placeholder="djfdf@gmail.com" className="py-3 px-11 rounded-l-md text-black placeholder-black"/>
  <button className="bg-[#7D43C4] text-white font-bold py-3 px-7 rounded-r-md text-md"> Sign Up for GitHub</button>
  <button className="    ml-9 py-3 px-8 text-white border border-[#7D43C4] rounded-md font-bold"> Start a free enterprise trial</button>
  < MdKeyboardArrowRight className="relative top-[14px] text-2xl right-8 font-semibold"/>
</div>

         
      </div>
      <div className=" logindiv flex    justify-center items-center flex-col  py-3 bg-[#283042]">
        {/* <form> */}
        <div>
          <MdOutlineEmail className="relative top-[29px] left-1 text-[#783FC7] " />

          <input
            onChange={(e) => setemail(e.target.value)}
            type="text"
            value={email}
            className="pl-7 pr-8 py-2 px-[40px]  border border-[#783FC7] rounded text-white outline-none placeholder-white  bg-transparent"
            placeholder="Enter your mail"
          />
        </div>
        <div className="">
          <CiLock className="relative top-[29px] left-1  text-[#783FC7] " />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            value={password}
            className="pl-7 pr-8 py-2 px-[40px] border border-[#783FC7] rounded text-white outline-none placeholder-white bg-transparent"
            placeholder="Type your Password"
          />
        </div>
        <button
          onClick={(e) => {
            handleLogin(e);
          }}
          className="relative z-50 m-5 text-white px-[100px]  py-3 bg-[#783FC7] rounded-md"
        >
          SignIn
        </button>

        <p className="text-white">
          {" "}
          Don't have an account?<span className="text-[#783FC7]"> SignUp</span>
        </p>
        <p className=" border-gray-400  py-3 font-semibold"> or</p>

        <button
          className="border-none text-white mt-3  px-[40px] rounded-md py-2 bg-[#783FC7]"
          onClick={() => handleGithub()}
        >
          <FaGithub className="inline mr-2 text-xl" /> Sign in with Github{" "}
        </button>

        <button
          className="border border-[#783FC7]   px-[40px] rounded-md py-2 mt-3 text-white"
          onClick={() => handleGoogle()}
        >
          <FcGoogle className="inline mr-2 text-xl  " />
          Sign in with Google{" "}
        </button>
       

       
        {/* </form> */}
      </div>
    </div>
  );
};

export default SignIn;
