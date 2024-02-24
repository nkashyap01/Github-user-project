import React, { useEffect, useState } from "react";
import { ReactComponent as FollowersIcon } from "./Assests/followersicon.svg";
import { ReactComponent as LinkdeinIcon } from "./Assests/linkdeinicon.svg";
import { ReactComponent as GithubIcon } from "./Assests/githubicon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { ReactComponent as RepoIcon } from "./Assests/repoicon.svg";
import Heading from "./Heading";
import { useDispatch, useSelector } from "react-redux";
import RepoDetails from "./RepoDetails";
import Select from 'react-select';
import { setUserInfo } from "../store";
import Connection from "./Connection";

const MainPage = () => {
  const BaseURL = "https://api.github.com/users";



  const dispatch=useDispatch();
 
  const [repo, setRepos] = useState(null);
  const [copyRepo,setCopyRepo]=useState(null);
  const [searchText,setSearchText]=useState(null);

  const [selectedOption,setSelectedOption]=useState(null);
  
  const [sortSelectedOption,setSortSelectedOption]=useState(null);
  const[connectionData,setConnectionData]=useState(null);

   const[allConnection, setAllConnection] = useState(null);
   const[displayRepo, setDisplayRepo]= useState(true);

  const handleChange=(selectedOption)=>{

      
    const filterData = copyRepo.filter((ele) => {

      if(!ele.language) return false;

     return  ele.language==selectedOption.value;

      
    }); 


    setRepos(filterData);

  }

  const sortHandleChange = (sortSelectedOption) => {
    const sortBy = sortSelectedOption.value;
    
    // Sort the repo array based on the selected option
    const sortedRepo = [...repo].sort((a, b) => {
      if (sortBy === 'updated_at') {
        return new Date(b.updated_at) - new Date(a.updated_at);
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  
    // Update the state with the sorted result
    setRepos(sortedRepo);
  };
  

  const sortOptions=[{
    value:"updated_at",label:"Last Updated"
  },{
    value:"name",label:"Name",
  }];


  const options=[ 
    {
   
    value:"JavaScript",label:"JavaScript"
  },
{
  value:"HTML", label:"HTML"
},
{
  value:"CSS", label:"CSS"
},
{
  value:"C", label:"C"
},
{
  value:"C++", label:"C++"
},
{
  value:"JAVA", label:"JAVA"
},
]

 

 

  const filterRepo=async(value)=>{

    const filterData=copyRepo.filter((ele)=>{
      return ele.name.toLowerCase().includes(value.toLowerCase());
    })

    setRepos(filterData);

  }



  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/users/${sessionStorage.getItem('name')}/repos`);
    const data = await res.json();
    
    setRepos(data);
    setCopyRepo(data);
  };

  const handleTemp=async(name)=>{
    const res= await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json();
    return data;
  }

  const handleFollowers=async()=>{
    const res=await fetch(`https://api.github.com/users/${sessionStorage.getItem('name')}/followers`)
const data = await res.json();
    
   const allFollowerdData=  await Promise.all(data.map(async ({ login }) => {
    return await handleTemp(login);
}));

   setAllConnection(allFollowerdData);
   setDisplayRepo(false);

  
    
  }

  const handleFollowing=async()=>{
    const res=await fetch(`https://api.github.com/users/${sessionStorage.getItem('name')}/following`)
const data = await res.json();
  
   const allFollowerdData=  await Promise.all(data.map(async ({ login }) => {
    return await handleTemp(login);
}));

   setAllConnection(allFollowerdData);
   setDisplayRepo(false);
  }


  const findUser = async () => {
    const res = await fetch(BaseURL + "/" + sessionStorage.getItem('name'));
    const data = await res.json();
    
    dispatch(setUserInfo(data));

    // fetchRepos();
  };
  
  const users=useSelector((store)=>store.github.userInfo);

  useEffect(() => {
    findUser();
    fetchRepos();
  }, [users]);



  if (!users || !repo || !copyRepo) return;

  const {
    login: username,
    bio,
    followers,
    following,
    avatar_url,
    html_url,
    name,
    location,
    public_repos,
  } = users;

  return (
    <div className="absolute top-0">
      <Heading username={username}  avatarUrl={avatar_url} publicRepos={public_repos} />

      <div className="min-h-screen bg-[#0A0C10] pt-10 px-20 flex">
        <div className="w-3.5/12 text-white  ">
          <img src={avatar_url} className="h-[300px] w-[300px] rounded-full" />
          <h1 className="text-2xl"> {username}</h1>
          <h3> {name}</h3>
          <p className="mt-3 text-wrap break-words w-[300px]">{bio}</p>

          <button className=" mt-3 w-[320px] h-[30px] flex justify-center items-center bg-[#525964] border border-white rounded-md"  >
            {" "}
            Edit Proile
          </button>

          <div className="flex mt-3 gap-2 items-center">
            <FollowersIcon />
            <p onClick={()=>handleFollowers()}> {followers} followers.</p>
            <p onClick={()=>handleFollowing()}>{following} following</p>
          </div>
          <div className="flex mt-4 gap-2 items-center">
            <LinkdeinIcon /> <p>{location}</p>
          </div>
          <div className="flex mt-1 gap-2 items-center">
            <GithubIcon />
            <a href={html_url} className="text-sm">
              {html_url}
            </a>
          </div>
        </div>

        <div className="w-8.5/12 ">
         {
          displayRepo?(<> <div className="flex gap-2">
          <input
            onChange={(e)=>{
              setSearchText(e.target.value);

              filterRepo(e.target.value);
            }}
            type="text"
            placeholder="Find a repository... "
            className="border border-white w-[500px] rounded-md bg-[#0A0C10] pl-4 h-8 flex items-center text-white"
          />
          <div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
            <p> Type</p>
            <IoMdArrowDropdown />
          </div>
         
          <Select  
         
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Language"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background:"black",
           
         
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: "white",
          fontWeight: "semibold",
         
        }),
      }}
     
    />
            <Select 
      value={sortSelectedOption}
      onChange={sortHandleChange}
      options={sortOptions}
      placeholder="Sort"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor:"black",
         
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: "white",
          fontWeight: "semibold",
        }),
      }}
     
    />
          <div className="text-sm  rounded-md text-black  px-2 gap-1 flex items-center justify-center font-semibold bg-[#26CD4D]">
            <RepoIcon className="fill-black" />
            <p> New</p>
          </div>
        </div>
          { 
            repo.map(({updated_at,name, language})=>{
              return <RepoDetails updated_at={updated_at} name={name} language={language}/>
            })
          }</>):( 

            <>
            {
            allConnection && allConnection.map(({name,login,avatar_url,bio,location})=>{
              
              return <Connection name={name} login={login} avatar_url={avatar_url} bio={bio} location={location} />

             })
          }
            </>
          )
         }
           

        </div>

      </div>
    </div>
  );
};

export default MainPage;
