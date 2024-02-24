import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import {ReactComponent as Searchslash} from "././UserDetails/Assests/searchslash.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowSignin, setIsShowSignup } from "./store";
import { useNavigate } from "react-router";
const Logo = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const isShowSignup=useSelector((store)=>store.github.isShowSignup);
  const isShowSignin=useSelector((store)=>store.github.isShowSignin);

  const [searchText,setSearchText]=useState(null);
  const showDetails= async()=>{
    navigate('/users/'+searchText);
  }

  const signOut = ()=>{
    sessionStorage.setItem("isShowHeader",true);
    navigate('/');
  
  }

  return (
    <div className="p-5 flex justify-between items-center bg-[#0D1117] text-white">
<div className="flex font-semibold gap-4  items-center">
 <FaGithub className="text-3xl"/>
{sessionStorage.getItem('isShowHeader') && <div className="flex">
 <p>Product <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Solution <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Open Source <RiArrowDropDownLine className="inline -ml-1 text-2xl"/></p>
  <p>Pricing  </p>
 </div>}

</div>

<div className="flex gap-3" >
  <div className="flex items-center border border-white px-10 py-[3px] bg-[#283041] text-white rounded-md  ">
  <CiSearch/>
  <input onKeyDown={(e)=>{if(e.key=="Enter"){
    showDetails()
  }}} type="text" onChange={(e)=>setSearchText(e.target.value)}  placeholder="Search or Jump to..." className="mx-1 bg-[#283041]  outline-none"/>
  <Searchslash/>

  </div>

 {sessionStorage.getItem('isShowHeader') ? 
 <>
 <button onClick={()=>{
       dispatch(setIsShowSignup(false))
       if(isShowSignin==false){
        dispatch(setIsShowSignin(true))
      }else
      dispatch(setIsShowSignin(false))
  
  }}> Sign in</button>
  <button onClick={()=>{
    dispatch(setIsShowSignin(false))
    if(isShowSignup==false){
      dispatch(setIsShowSignup(true))
    }else
    dispatch(setIsShowSignup(false))
    }} className="border border-white rounded-md px-2 py-1"> Sign up</button>
</>:
 <button onClick={()=> signOut()}>Sign out</button> }

</div>
    </div>
  );
};

export default Logo;
