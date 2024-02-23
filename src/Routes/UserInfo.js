import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import ProfilesDetails from "../components/UserDetails/ProfilesDetails";
import RepoDetails from "../components/UserDetails/RepoDetails";
 

const UserInfo = () => {
  const [user, setUser] = useState();

  const [followersData, setFollowersData]=useState(null);
  const [followersborder, setFollowersBorder]=useState(false);
  const [followingborder, setFollowingBorder]=useState(false);
  const [reposborder, setReposBorder]=useState(false);

   const [reposData,setReposData]=useState(null);
 
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users/";


  const {username}=useParams();

  async function GetUserInfo() {
    const res = await fetch(BaseURL +username);
    const data = await res.json();

    setUser(() => [data]);
   
  }

  const getFollowers= async()=>{

    const res=await fetch(`https://api.github.com/users/${username}/followers`);
    const data= await res.json();
    setFollowersData(data);
   setReposData(null);
  }

  const getFollowing= async()=>{

    const res=await fetch(`https://api.github.com/users/${username}/following`);
    const data= await res.json();
    setFollowersData(data);
    setReposData(null);

  }

  const getRepos = async()=>{
    const res=await fetch(`https://api.github.com/users/${username}/repos`);
    const data= await res.json();
    setReposData(data);
  }

  useEffect(() => {
    GetUserInfo();
    
  }, [username]);

  return (
    <div className=" -mt-7 px-5 bg-[#0D1117]">
      <button
        onClick={() => navigate("/")}
        className=" bg-[#7D43C5] mx-1 my-4 px-5 relative top-7 text-white rounded-sm"
      >
        {" "}
        Back
      </button>
      {user &&
        user?.map((uinfo, i) => (
          <div key={i} className="flex justify-center  items-center gap-[60px]">
            <img
              src={uinfo.avatar_url}
              className="w-[430px] border-2 border-[#7D43C5] h-[430px] rounded-full "
            />
            <div className="text-lg px-3 leading-9 ">
              <h1 className="text-3xl pb-3 text-white"> {uinfo?.name}</h1>
              <h3 className="text-white">
                {" "}
                <span className="text-[#7D43C5] mr-2"> Login_name:</span>
                {uinfo?.login}
              </h3>
              <h3 className="text-white">
                {" "}
                <span className="text-[#7D43C5] mr-2"> followeres:</span>
                {uinfo?.followers}
              </h3>
              <h3 className="text-white">
                {" "}
                <span className="text-[#7D43C5] mr-2"> following : </span>
                {uinfo?.following}
              </h3>
              <h3 className="text-white">
                {" "}
                <span className="text-[#7D43C5]  mr-2"> Public_Repository : </span>
                {uinfo?.public_repos}
              </h3> 
              <h3 className="text-white">
                <span className="text-[#7D43C5] mr-2"> Join :</span>
                 { uinfo?.created_at && ((uinfo?.created_at).toLocaleString()).substring(0,10)}
                {/* {new Date(uinfo?.created_at).toLocaleString()} */}
              </h3>

              <h3 className="text-white">
                <span className="text-[#7D43C5] "> updated_at: </span>
                {uinfo?.updated_at && (uinfo?.updated_at).substring(0,10)}
                {/* {new Date(uinfo?.updated_at).toLocaleString()} */}
              </h3>
             <div className="flex items-center justify-center mt-2">
             <a
                href={uinfo?.html_url}
                target="_blank"
                className=" text-gray-500 bg-[#7D43C5] rounded px-4 cursor-pointer font-semibold text-white px-5 "
              >
                {" "}
                Visit
              </a>
             </div>
            </div>
          </div>
        ))}
      <div className="flex justify-center py-4 border-b pb-4 gap-6 text-xl text-white">
      <button className={followersborder? " border-b-2 border-[#7D43C5] p-2":""} onClick={()=>{
        setFollowersBorder(true);
        setReposBorder(false);
        setFollowingBorder(false);
        getFollowers()}}>Followers</button>
        <button className={followingborder? " border-b-2 border-[#7D43C5] p-2":""} onClick= {()=>{
        setFollowersBorder(false);
        setReposBorder(false);
        setFollowingBorder(true);
        getFollowing()}}> Following</button>

        <button  className={reposborder? " border-b-2 border-[#7D43C5] p-2":""} onClick= {()=>{
        setFollowersBorder(false);
        setFollowingBorder(false);
        setReposBorder(true);
        getRepos()}}>  Repositories</button>
       
      </div>
      {reposData==null ?<div className="flex  flex-wrap justify-center pt-5 gap-8">
        {followersData && followersData.map(({avatar_url,login})=>{
          return  <ProfilesDetails pic={avatar_url} username={login}/>
        })}
      </div>:

      <div className="flex justify-center flex-col bg-[#0D1117] px-40">

        {reposData && reposData.map(({updated_at,name, language})=>{
          return <RepoDetails updated_at={updated_at} name={name} language={language}/>

        })}
        </div>}


    </div>
  );
};

export default UserInfo;
