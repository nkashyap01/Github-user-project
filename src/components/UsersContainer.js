import React from "react";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center py-5">
      {users &&
        users.map(
          (user, index) =>
            user?.login && (
              <div
                key={index}
                className=" flex w-56 border border-gray-500 bg-gray-900 p-3 flex-col items-center "
              >
                <img
                  src={user?.avatar_url}
                  className="w-24 border-4 rounded-full "
                />
                <h1 className="text-xl"> {user?.login}</h1>
                <h1 className="text-sm text-black-300"> {user?.name}</h1>

                <Link to={`/${user?.login}`}>
                  <button className="bg-green-600 my-3 px-5">
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
