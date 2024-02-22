import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../FirebaseConfig";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleRegister = (e) => {
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

        navigate("/signin");
      })
      .catch((error) => {
       
      });
  };

  const switchToSignin = () => {
    navigate("/signin");
  };

  return (
  
      <div className=" flex justify-around items-center">
        <div>
          <img
            src=" https://github.blog/wp-content/uploads/2019/05/facebook-1200x630-final.png?fit=1200%2C630"
            className="h-[80vh] w-[100vh]"
          />
        </div>
        <div className="signdiv flex  justify-center items-center flex-col py-3 bg-[#283042] ">
          {/* <form> */}
          <div>
            <FiUser className="relative top-[25px] left-1 text-[#8144C5] " />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              className="border border-[#8144C5] rounded pl-7 pr-8 py-1 bg-transparent placeholder-white "
              placeholder="Enter Your name"
            />
          </div>
          <div>
            <MdOutlineEmail className="relative top-[25px] left-1 text-[#8144C5] " />
            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              value={email}
              className="pl-7 pr-8 py-1  border border-[#8144C5] rounded bg-transparent placeholder-white"
              placeholder="Enter your mail"
            />
          </div>
          <div>
            <CiLock className="relative top-[25px] left-1  text-[#8144C5] text-md font-bold " />

            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              value={password}
              className="pl-7 pr-8 py-1 border border-[#8144C5] rounded bg-transparent placeholder-white"
              placeholder="create your Password"
            />
          </div>
          <button
            onClick={(e) => {
              handleRegister(e);
            }}
            className="relative z-50 m-5 text-white px-[100px]  py-3 bg-[#8144C5] rounded-md "
          >
            SignUp
          </button>
          {/* </form> */}

          <p> or</p>

          <p>
            {" "}
            Already have an account?
            <span onClick={() => switchToSignin()} className="text-[#8144C5]">
              {" "}
              SignIn
            </span>
          </p>
        </div>
      </div>
     
  );
};

export default SignUp;
