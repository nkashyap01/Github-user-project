// import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className=" text-gray-200 py-3">
        <Logo />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/:name" element={<UserInfo />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
