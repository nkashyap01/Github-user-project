// import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";
import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/Authentication/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className=" text-gray-200 py-3">
        <Logo />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}/>
            <Route path="/:name" element={<UserInfo />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />}/>
      
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default App;
