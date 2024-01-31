import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users";
  async function GetUserInfo() {
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUser(data);
  }
  console.log(pathname);
  return (
    <div className="py-5 px-5">
      <button
        onClick={() => navigate("/")}
        className=" bg-teal-600 mx-1 my-4 px-5"
      >
        {" "}
        Back
      </button>
    </div>
  );
};

export default UserInfo;
