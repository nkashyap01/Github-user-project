import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import {ReactComponent as Searchslash} from "././UserDetails/Assests/searchslash.svg";
const Logo = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-[#0D1117] text-white">
<div className="flex font-semibold gap-4  items-center">
 <FaGithub className="text-3xl"/>
  <p>Product <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Solution <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Open Source <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Pricing  </p>
  
 
</div>

<div className="flex gap-3" >
  <div className="flex items-center border border-white px-10 py-[3px] bg-[#283041] text-white rounded-md  ">
  <CiSearch/>
  <input type="text" placeholder="Search or Jump to..." className="mx-1 bg-[#283041]"/>
  <Searchslash/>

  </div>

  <button> Sign in</button>
  <button className="border border-white rounded-md px-2 py-1"> Sign up</button>


</div>
    </div>
  );
};

export default Logo;
