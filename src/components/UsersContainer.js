import React from "react";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {

console.log(users);

  return (
    <div className="flex gap-4 flex-wrap justify-center py-5">
      { users && 
        users.map(
          (user, index) =>
            user?.login && (
              <div
                key={index}
                className=" flex w-56 border border-gray-500 bg-[#27272a] p-3 flex-col items-center "
              >
                <img
                  src={user?.avatar_url}
                  className="w-24 border-4 rounded-full "
                />
                <h1 className="text-xl font-semibold text-white mb-1 mt-2">
                  {" "}
                  {user?.login}
                </h1>
                <h1 className="text-sm text-white "> {user?.name}</h1>

                <Link to={"/users/"+user?.login} >
                  <button className="bg-[#8044C4] my-3 py-1 px-5 rounded-md text-white ">
                    {" "}
                    Show Details
                  </button>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default UsersContainer;
