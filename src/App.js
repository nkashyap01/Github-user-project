// import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/Authentication/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
        <Logo />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}/>
            <Route path="/:name" element={<UserInfo />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />}/>
      
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} />
        </> 
  );
};

export default App;
