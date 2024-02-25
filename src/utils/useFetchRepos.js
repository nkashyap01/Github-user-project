import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCopyUserRepos, setUserRepos } from "../components/store";

const useFetchRepos = async (name) => {
  const dispatch = useDispatch();

  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await res.json();

    dispatch(setUserRepos(data));
    dispatch(setCopyUserRepos(data));
  };

  useEffect(() => {
    fetchRepos();
  }, []);
};

export default useFetchRepos;
