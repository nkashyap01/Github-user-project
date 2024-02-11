import React from "react";

const Logo = () => {
  return (
    <div className="bg-black flex pb-2 justify-center items-center border-b-2 border-gray-500 ">
      <img
        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        className="w-24 rounded-full"
      ></img>
      <h1 className="text-2xl px-2 first-letter:text-5xl text-white">GitHub Users</h1>
    </div>
  );
};

export default Logo;
