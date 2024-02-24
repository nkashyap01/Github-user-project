import React from 'react'

const Connection = ({name,login,avatar_url,bio,location}) => {
  return (
    <div className="flex justify-between items-center text-white border-b py-5 ">

<div className="flex gap-5 justify-center items-center ">
      <img src={avatar_url}    alt="" className="h-[55px] w-[55px] rounded-full"/>
      <div> 
        <div className="flex gap-2 items-center">
        <h1> {name}</h1>
        <p className="text-sm"> {login}</p>
        </div> 
        <p className="text-xs mt-1">{bio}</p>
        <p className="text-xs mt-1"> {location}</p>
      </div>

    </div>
    <button className="border border-white rounded-md bg-[#525964] text-sm px-2 py-1"> Follow</button>
    </div>
  )
}

export default Connection