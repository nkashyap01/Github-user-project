import React from 'react'
import {ReactComponent as StarIcon} from "./Assests/staricon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import {ReactComponent as ActivityStatus} from "./Assests/activity.svg"
import {ReactComponent as DropDown} from "./Assests/dropdown.svg"

const RepoDetails = ({updated_at,name, language}) => {
  return (
    <div className="flex justify-between pt-6 border-t border-white mt-4">
       <div className="flex flex-col">
        <div className="flex gap-2"> 
            <h1 className="text-[#71B7FF]"> {name}</h1>
            <button className="text-white rounded-md"> Public</button>
        </div>
        <div className="flex text-white text-xs gap-3 mt-2"> 
          <p> {language}</p>  
          <p> Updated  {new Date(updated_at).toLocaleString()}</p>
        </div>
        </div> 
        <div > 
            <div className="flex relative left-[55px]  w-[94px] rounded-md text-white border border-white justify-around bg-[#525964]  items-center opacity-70 self-end ">
              <StarIcon />
              <p>star</p> 
              <DropDown className=" border-l  border-white"/>
            </div>
          
                <ActivityStatus/>
           
        </div>
    </div>
  )
}

export default RepoDetails