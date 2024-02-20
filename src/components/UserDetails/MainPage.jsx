import React, { useEffect, useState } from "react";
import { ReactComponent as FollowersIcon } from "./Assests/followersicon.svg";
import { ReactComponent as LinkdeinIcon } from "./Assests/linkdeinicon.svg";
import { ReactComponent as GithubIcon } from "./Assests/githubicon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { ReactComponent as RepoIcon } from "./Assests/repoicon.svg";
import Heading from "./Heading";
import { useSelector } from "react-redux";
import RepoDetails from "./RepoDetails";

const MainPage = () => {
  const BaseURL = "https://api.github.com/users";

  const [users, setUsers] = useState(null);
  const [repo, setRepos] = useState(null);

  const name = useSelector((store) => store.github.name);

  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await res.json();
    console.log(data);
    setRepos(data);
  };

  const findUser = async () => {
    const res = await fetch(BaseURL + "/" + name);
    const data = await res.json();
    console.log(data);
    setUsers(data);

    fetchRepos();
  };

  useEffect(() => {
    findUser();
  }, []);

  if (!users || !repo) return;

  const {
    name: username,
    bio,
    followers,
    following,
    avatar_url,
    html_url,
    location,
    public_repos,
  } = users;

  return (
    <>
      <Heading avatarUrl={avatar_url} publicRepos={public_repos} />

      <div className="min-h-screen bg-[#0A0C10] pt-10 px-20 flex">
        <div className="w-4/12 text-white  ">
          <img src={avatar_url} className="h-[300px] w-[300px] rounded-full" />
          <h1 className="text-2xl"> {username}</h1>
          <h3> NKashyap01</h3>
          <p className="mt-3">{bio}</p>

          <button className=" mt-3 w-[320px] h-[30px] flex justify-center items-center bg-[#525964] border border-white rounded-md">
            {" "}
            Edit Proile
          </button>

          <div className="flex mt-3 gap-2 items-center">
            <FollowersIcon />
            <p> {followers} followers.</p>
            <p>{following} following</p>
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

        <div className="w-8/12 ">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Find a repository... "
              className="border border-white w-[500px] rounded-md bg-[#0A0C10] pl-4 h-8 flex items-center text-white"
            />
            <div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
              <p> Type</p>
              <IoMdArrowDropdown />
            </div>
            <div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
              <p> Language</p>
              <IoMdArrowDropdown />
            </div>
            <div className="text-sm  rounded-md text-white border border-white px-2 gap-2 flex items-center justify-center font-semibold">
              <p> Sort</p>
              <IoMdArrowDropdown />
            </div>
            <div className="text-sm  rounded-md text-black  px-2 gap-1 flex items-center justify-center font-semibold bg-[#26CD4D]">
              <RepoIcon className="fill-black" />
              <p> New</p>
            </div>
          </div>
            {
              repo.map(({updated_at,name, language})=>{
                return <RepoDetails updated_at={updated_at} name={name} language={language}/>
              })
            }
        </div>

      </div>
    </>
  );
};

export default MainPage;
