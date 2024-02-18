import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoIssueOpened } from "react-icons/go";
import { FaCodePullRequest } from "react-icons/fa6";
import { GoInbox } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
 
import { ReactComponent as ProjectIcon } from './Assests/projectIcon.svg';
import{ReactComponent as  RepoIcon} from "./Assests/repoicon.svg";
 import {ReactComponent as PackageIcon} from "./Assests/packageicon.svg";
 import {ReactComponent as StarsIcon} from "./Assests/staricon.svg";
 import {ReactComponent as OverviewIcon} from "./Assests/overviewicon.svg"


const Heading = () => {
  return (
    <div className="bg-[#0A0C10] border-b border-white p-3">
   <div className="flex justify-between items-center   ">
<div className="flex gap-5 justify-center items-center text-white ">
    <div className="border border-white rounded-[5px] p-1">
    <RxHamburgerMenu className="text-2xl " />
    </div>
<FaGithub className="text-4xl " />
     <p className="semi-bold  "> nkashyap01</p>
</div>



<div className="flex items-center gap-2" >
    <div className="flex items-center justify-center">
    <IoSearchSharp className="relative left-6  text-md text-white"/>
        <input type="text" placeholder="Type / to search" className="rounded-md border border-white bg-[#0A0C10] pl-8  py-1 w-[300px]"></input>

        <div className="flex border-l border-white text-white relative -left-8 items-center pl-1">
        <FaChevronRight />
        <p>-</p>
        </div>
    </div>
    <div className="border border-white rounded-[5px] flex justify-center items-center text-white gap-1 px-1 text-xl">
   <p className="pl-1 relative -top-1">+</p>
    <IoMdArrowDropdown  />

    </div>
    <div className="border border-white rounded-[5px] flex justify-center items-center p-[6px]">
    <GoIssueOpened className="text-white"/>
    </div>
    <div className="border border-white rounded-[5px] flex justify-center items-center p-[6px] text-white">
    <FaCodePullRequest />

    </div>
    <div className="border border-white rounded-[5px] flex justify-center items-center p-[6px] text-white">
        <GoInbox />
        </div>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j5DCstg4hDeoFcAuI67531O0eq6f2uJKBJv3aGdT3w&s"  className="h-8 w-8 rounded-full" alt="pic" /> 
</div>

    </div>

<div className="text-white flex items-center mt-4 gap-7">
 <div className="flex items-center gap-2  justify-center">
 <OverviewIcon/>
 <p > Overview</p>
 </div>
 <div className="flex items-center gap-2  justify-center">
 <RepoIcon/>
    <p> Repositories</p>
    <p className="rounded-full bg-[#565D67] px-[6px] py-[2px] text-xs"> 36</p>
 </div>

 <div className="text-white flex items-center gap-2  justify-center ">  
    <ProjectIcon />
    <p>  Projects</p>
 </div>
 <div className="text-white flex items-center gap-2  justify-center ">
    <PackageIcon/>
    <p> Packages</p>
 </div>
 <div className="text-white flex items-center gap-2  justify-center ">
    <StarsIcon/>
    <p>Stars </p> 
 </div>
 
</div>

    </div>

  )
}

export default Heading