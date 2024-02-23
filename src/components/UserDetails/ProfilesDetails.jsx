import React from 'react'
import { Link } from 'react-router-dom'

const ProfilesDetails = ({pic,username}) => {
  return (
    <div
 
    className=" flex w-56 border border-gray-500 bg-[#27272a] p-3 flex-col items-center "
  >
    <img
      src={pic}
      className="w-24 border-4 rounded-full "
    />
    <h1 className="text-xl font-semibold text-white mb-1 mt-2">
      {" "}
      {username}
    </h1>
    <h1 className="text-sm text-white "> {username}</h1>

    <Link to={"/users/"+username} >
      <button className="bg-[#8044C4] my-3 py-1 px-5 rounded-md text-white ">
        {" "}
        Show Details
      </button>
    </Link>
  </div>
  )
}

export default ProfilesDetails