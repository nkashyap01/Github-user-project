// import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
 
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
        <Logo />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/:name" element={<UserInfo />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/users" element={<Users />}/>
            
      
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} />
        </> 
  );
};

export default App;
