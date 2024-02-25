import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../components/store";

const useFindUserInfo = async (name) => {
  const dispatch = useDispatch();

  const findUser = async () => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json();
    dispatch(setUserInfo(data));
  };

  useEffect(() => {
    findUser();
  }, []);
};

export default useFindUserInfo;
