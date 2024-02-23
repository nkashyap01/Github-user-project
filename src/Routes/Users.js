import React, { useEffect, useState } from "react";
import UsersContainer from "../components/UsersContainer";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../components/store";

const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const name = useSelector((store) => store.github.name);

  const BaseURL = "https://api.github.com/users";

  const user = useRef("");

  const findUser = async () => {
    if (user.current.value == "") {
      try{
        const res = await fetch(BaseURL);
      const data = await res.json();
      setUsers(data);
      }catch(error){
        console.log(error);
      }
     
    } else {
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setUsers([data]);
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="bg-[#0D1117] min-h-[85vh] pt-4">
      <div className="flex justify-center items-center h-12">
        <input
          type="text"
          placeholder="search githhub username.."
          className="h-full rounded-l-md w-[400px] text-white px-6 font-semibold outline-none bg-[#283042]"
          ref={user}
        />
        <button
          onClick={findUser}
          className="bg-[#8044C4] text-white font-semibold h-full px-4 rounded-r-md"
        >
          {" "}
          Search
        </button>
      </div>
      <div className="flex items-center justify-center min-h-[60vh] bg-[#0D1117]">
      <UsersContainer users={users} />
      </div>
    </div>
  );
};
export default Users;
