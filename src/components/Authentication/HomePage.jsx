import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import { ReactComponent as Closearrow } from "../UserDetails/Assests/closearrow.svg";

const HomePage = () => {
    const isShowSignup = useSelector((store) => store.github.isShowSignup);
    const isShowSignin = useSelector((store) => store.github.isShowSignin);
    const [pageReloaded, setPageReloaded] = useState(false);



    return (
        <div className="flex items-center bg-[#0D1117]">
            <div className="flex flex-col items-center relative left-5">
                <div className="h-3 w-3 border rounded-full"></div>
                <div className="w-1 h-[220px] bg-gradient-to-t from-[#7D72FF] to-[#16192A] "></div>
                <div className="h-12 w-12 rounded-full flex items-center my-1 justify-center bg-[#1C1F38]">
                    <Closearrow className="fill-white" />
                </div>
                <div className="w-1 h-[220px] bg-gradient-to-t from-[#16192A] to-[#7D72FF] "></div>
            </div>

            <div className="w-8/12 h-[88vh] ml-10 mt-16 text-white flex flex-col">
                <h1 className="text-8xl font-medium"> Let's build from here </h1>
                <p className="text-gray-500 text-3xl pt-6">The world's leading AI-powered developer platform.</p>
                <div className="pt-24 flex">
                    <input type="text" placeholder="nehakashyap@gmail.com" className="py-3 px-11 rounded-l-md text-black placeholder-black" />
                    <button className="bg-[#7D43C4] text-white font-bold py-3 px-7 rounded-r-md text-md"> Sign Up for GitHub</button>
                    <div className='w-[1px] bg-slate-400 relative left-5'></div>
                    <button className="ml-9 py-3 px-8 text-white border border-[#7D43C4] rounded-md font-bold"> Start a free enterprise trial</button>
                    <MdKeyboardArrowRight className="relative top-[14px] text-2xl right-8 font-semibold" />
                </div>
            </div>
            {isShowSignup && <SignUp />}
            {isShowSignin && <SignIn />}
        </div>
    );
}

export default HomePage;
