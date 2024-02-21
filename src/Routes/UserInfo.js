import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState();
 
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users/";


  const {id}=useParams();

  async function GetUserInfo() {
    const res = await fetch(BaseURL +id);
    const data = await res.json();


  console.log(data);

    setUser(() => [data]);
   
  }

  useEffect(() => {
    GetUserInfo();
  }, []);

  return (
    <div className="py-5 px-5">
      <button
        onClick={() => navigate("/")}
        className=" bg-blue-600 mx-1 my-4 px-5"
      >
        {" "}
        Back
      </button>
      {user &&
        user?.map((uinfo, i) => (
          <div key={i} className="flex justify-center ">
            <img
              src={uinfo.avatar_url}
              className="w-[350px] border-2 border-blue-400 mx-auto"
            />
            <div className="text-lg px-3 leading-9">
              <h1 className="text-3xl pb-3"> {uinfo?.name}</h1>
              <h3>
                {" "}
                <span className="text-blue-400 "> Login_name</span>:
                {uinfo?.login}
              </h3>
              <h3>
                {" "}
                <span className="text-blue-400 "> followeres</span>:
                {uinfo?.followers}
              </h3>
              <h3>
                {" "}
                <span className="text-blue-400 "> following</span>:
                {uinfo?.following}
              </h3>
              <h3>
                {" "}
                <span className="text-blue-400 "> Public_Repository</span>:
                {uinfo?.public_repos}
              </h3>
              <h3>
                <span className="text-blue-400"> Join</span>:
                {new Date(uinfo?.created_at).toLocaleString()}
              </h3>

              <h3>
                <span className="text-blue-400 "> updated_at </span>:
                {new Date(uinfo?.updated_at).toLocaleString()}
              </h3>
              <a
                href={uinfo?.html_url}
                target="_blank"
                className=" text-gray-500 bg-blue-300 rounded px-4 cursor-pointer font-semibold tracking-wide"
              >
                {" "}
                Visit
              </a>
            </div>
          </div>
        ))}
      <div className="flex justify-center py-4 border-b pb-4 gap-6 text-xl">
        <button> Repositories</button>
        <button> Activity</button>
        <button>Followers</button>
      </div>
    </div>
  );
};

export default UserInfo;
