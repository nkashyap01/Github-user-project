import React from 'react'
import {ReactComponent as FollowersIcon} from "./Assests/followersicon.svg"
import {ReactComponent as LinkdeinIcon} from "./Assests/linkdeinicon.svg";
import {ReactComponent as GithubIcon} from "./Assests/githubicon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import {ReactComponent as RepoIcon} from "./Assests/repoicon.svg";
 
const MainPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0C10] pt-10 px-20 flex"> 
<div className="w-4/12 text-white  ">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j5DCstg4hDeoFcAuI67531O0eq6f2uJKBJv3aGdT3w&s" className="h-[300px] w-[300px] rounded-full" />
  <h1 className="text-2xl"> Neha Kumari</h1>
  <h3> NKashyap01</h3>
  <p className="mt-3"> I have no special talent</p>

  <button className=" mt-3 w-[320px] h-[30px] flex justify-center items-center bg-[#525964] border border-white rounded-md"> Edit Proile</button>

<div className="flex mt-3 gap-2 items-center">
  <FollowersIcon/>
 <p> 10 followers.</p> 
 <p>10 following</p> 

</div>
<div className="flex mt-4 gap-2 items-center">
<LinkdeinIcon/> <a href="https://www.linkedin.com/in/neha-kumari-77205a227/" className="text-sm"> https://www.linkedin.com/in/neha-kumari-77205a227/</a>
</div>
<div className="flex mt-1 gap-2 items-center">
<GithubIcon/>
<a href="https://github.com/nkashyap01" className="text-sm">https://github.com/nkashyap01</a>
</div>

</div>



<div className="w-8/12 ">
  <div className="flex gap-2">
  <input type="text" placeholder="Find a repository... " className="border border-white w-[500px] rounded-md bg-[#0A0C10] pl-4 h-8 flex items-center text-white" />
<div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
  <p> Type</p>
  <IoMdArrowDropdown/>
</div>
<div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
  <p> Language</p>
  <IoMdArrowDropdown/>
</div>
<div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
  <p> Sort</p>
  <IoMdArrowDropdown/>
</div>
<div className="text-sm  rounded-md text-black  px-2 gap-1 flex items-center justify-center font-semibold bg-[#26CD4D]">
<RepoIcon className="fill-black"/>
  <p> New</p>
  
</div>
</div>

</div>
    </div>
  )
}

export default MainPage