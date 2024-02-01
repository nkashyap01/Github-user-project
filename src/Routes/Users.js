import React, { useEffect, useState } from "react";
import UsersContainer from "../components/UsersContainer";
import { useRef } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  let BaseURL = "https://api.github.com/users";
  const user = useRef("");
  console.log(BaseURL);
  async function Allusers() {
    const res = await fetch(BaseURL);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }
  async function FindUser() {
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = "";
    } else {
      Allusers();
    }
  }

  useEffect(() => {
    Allusers();
  }, [setUsers]);

  return (
    <div>
      <div className="flex justify-center items-center h-12 my-6">
        <input
          type="text"
          placeholder="search githhub username.."
          className="h-full  w-[400px] text-gray-500 px-6 font-semibold outline-none"
          ref={user}
        />
        <button
          onClick={FindUser}
          className="bg-blue-600 font-semibold h-full px-4"
        >
          {" "}
          Search
        </button>
      </div>
      <UsersContainer users={users} />
    </div>
  );
};
export default Users;
