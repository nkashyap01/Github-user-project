import React from 'react'
import { Link } from 'react-router-dom'

const ProfilesDetails = ({pic,username}) => {
  return (
    <div
    
    className=" flex w-56 border border-gray-500 bg-white p-3 flex-col items-center "
  >
    <img
      src= {pic}
      className="w-24 border-4 rounded-full "
    />
    <h1 className="text-xl font-semibold text-gray-800 mb-1">
      {" "}
    {username}
    </h1>

    <Link  to=  {"/users/"+username} > 
      <button className="bg-blue-600 my-3 px-5  ">
        {" "}
        Show Details
      </button>
    </Link>
  </div>
  )
}

export default ProfilesDetails