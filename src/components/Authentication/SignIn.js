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
        sessionStorage.setItem("isShowHeader",false)

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
        sessionStorage.setItem("isShowHeader",false)
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
        sessionStorage.setItem("isShowHeader",false)
        navigate("/users");
      })
      .catch((error) => {
        
      })
  };

  return (
    <div className=" flex justify-around items-center  ">
      
      
      <div className=" logindiv flex    justify-center items-center flex-col  py-3 bg-[#283042] ml-8 -mt-32 rounded-sm">
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
        <div className="flex items-center justify-center"> 
          <p className="h-[2px] w-24 bg-[#8144C5]"></p>
          <p  className="px-1 text-white"> or</p>
          <p className="h-[2px] w-24 bg-[#8144C5]"></p>
          </div>

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
