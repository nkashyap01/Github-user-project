import React, { useEffect, useState } from "react";
import { ReactComponent as FollowersIcon } from "./Assests/followersicon.svg";
import { ReactComponent as LinkdeinIcon } from "./Assests/linkdeinicon.svg";
import { ReactComponent as GithubIcon } from "./Assests/githubicon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { ReactComponent as RepoIcon } from "./Assests/repoicon.svg";
import Heading from "./Heading";
import { useDispatch, useSelector } from "react-redux";
import RepoDetails from "./RepoDetails";
import Select from "react-select";
import Connection from "./Connection";
import useFetchRepos from "../../utils/useFetchRepos";
import useFindUserInfo from "../../utils/useFindUserInfo";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import { options as languageOptions, sortOptions } from "../../utils/options";
import { setCopyUserRepos, setUserRepos } from "../store";
import useHandleFollowers from "../../utils/useHandleFollowers";
import useHandleFollowing from "../../utils/useHandleFollowing";

const MainPage = () => {
  useFindUserInfo(sessionStorage.getItem("name"));
  useFetchRepos(sessionStorage.getItem("name"));
  useHandleFollowers(sessionStorage.getItem("name"));
  useHandleFollowing(sessionStorage.getItem("name"));

  const dispatch = useDispatch();

  const repo = useSelector((store) => store.github.userRepos);
  const copyRepo = useSelector((store) => store.github.copyUserRepos);
  const users = useSelector((store) => store.github.userInfo);

  const allFollowersData = useSelector(
    (store) => store.github.allFollowersData
  );
  const allFollowingData = useSelector(
    (store) => store.github.allFollowingData
  );

  const [allConnection, setAllConnection] = useState(null);

  const handleFollowers = () => {
    setDisplayRepo((prev) => !prev);
    setAllConnection(allFollowersData);
  };

  const handleFollowing = () => {
    setDisplayRepo((prev) => !prev);
    setAllConnection(allFollowingData);
  };

  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < repo.length / 10) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const [searchText, setSearchText] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortSelectedOption, setSortSelectedOption] = useState(null);

  const [displayRepo, setDisplayRepo] = useState(true);

  useEffect(() => {}, []);

  if (!users || !repo || !copyRepo || !allFollowersData || !allFollowingData)
    return null;

  const handleChange = (selectedOption) => {
    const filterData = copyRepo.filter((ele) => {
      if (!ele.language) return false;

      return ele.language == selectedOption.value;
    });

    dispatch(setUserRepos(filterData));
  };

  const sortHandleChange = (sortSelectedOption) => {
    const sortBy = sortSelectedOption.value;

    const sortedRepo = [...copyRepo].sort((a, b) => {
      if (sortBy === "updated_at") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    dispatch(setUserRepos(sortedRepo));
  };

  const filterRepo = async (value) => {
    const filterData = copyRepo.filter((ele) => {
      return ele.name.toLowerCase().includes(value.toLowerCase());
    });

    dispatch(setUserRepos(filterData));
  };

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
    <div className="absolute w-full top-0">
      <Heading
        username={username}
        avatarUrl={avatar_url}
        publicRepos={public_repos}
      />

      <div className="min-h-screen bg-[#0A0C10] pt-10 px-20 flex">
        <div className="w-4/12 text-white  ">
          <img src={avatar_url} className="h-[300px] w-[300px] rounded-full" />
          <h1 className="text-2xl"> {username}</h1>
          <h3> {name}</h3>
          <p className="mt-3 text-wrap break-words w-[350px]">{bio}</p>

          <button className=" mt-3 w-[320px] h-[30px] flex justify-center items-center bg-[#525964] border border-white rounded-md">
            {" "}
            Edit Proile
          </button>

          <div className="flex mt-3 gap-2 items-center">
            <FollowersIcon />
            <p onClick={() => handleFollowers()}> {followers} followers.</p>
            <p onClick={() => handleFollowing()}>{following} following</p>
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
          {displayRepo ? (
            <>
              {" "}
              <div className="flex gap-2">
                <input
                  onChange={(e) => {
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
                  options={languageOptions}
                  placeholder="Language"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      background: "black",
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
                      backgroundColor: "black",
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
              {repo &&
                repo
                  .slice(page * 10 - 10, page * 10)
                  .map(({ updated_at, name, language }) => {
                    return (
                      <RepoDetails
                        key={name}
                        updated_at={updated_at}
                        name={name}
                        language={language}
                      />
                    );
                  })}
              <div className="flex gap-4 items-center justify-center text-blue-500 mb-5">
                <div
                  onClick={() => handlePrevious()}
                  className={`flex justify-center items-center gap-1 ${
                    page == 1 ? "text-gray-500" : ""
                  }`}
                >
                  <GrFormPrevious className="mt-1" />
                  <button>previous</button>
                </div>
                <div
                  onClick={() => handleNext()}
                  className={`flex justify-center items-center gap-1 ${
                    page == repo.length / 10 ? "text-gray-500" : ""
                  }`}
                >
                  <button>next</button>
                  <GrFormNext className="mt-1" />
                </div>
              </div>
            </>
          ) : (
            <>
              {allConnection &&
                allConnection
                  .slice(page * 10 - 10, page * 10)
                  .map(({ name, login, avatar_url, bio, location }) => {
                    return (
                      <Connection
                        key={login}
                        name={name}
                        login={login}
                        avatar_url={avatar_url}
                        bio={bio}
                        location={location}
                      />
                    );
                  })}
              <div className="flex gap-4 items-center justify-center text-blue-500 mb-5">
                <div
                  onClick={() => handlePrevious()}
                  className={`flex justify-center items-center gap-1 ${
                    page == 1 ? "text-gray-500" : ""
                  }`}
                >
                  <GrFormPrevious className="mt-1" />
                  <button>previous</button>
                </div>
                <div
                  onClick={() => handleNext()}
                  className={`flex justify-center items-center gap-1 ${
                    page == repo.length / 10 ? "text-gray-500" : ""
                  }`}
                >
                  <button>next</button>
                  <GrFormNext className="mt-1" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
