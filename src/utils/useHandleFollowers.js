import { useDispatch } from "react-redux";
import { setAllFollowersData } from "../components/store";
import { useEffect } from "react";

const handleTemp = async (name) => {
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = await res.json();
  return data;
};

const useHandleFollowers = async (name) => {
  const dispatch = useDispatch();

  const handleFollowers = async () => {
    const res = await fetch(`https://api.github.com/users/${name}/followers`);
    const data = await res.json();

    const allFollowerdData = await Promise.all(
      data.map(async ({ login }) => {
        return await handleTemp(login);
      })
    );

    dispatch(setAllFollowersData(allFollowerdData));
  };

  useEffect(() => {
    handleFollowers();
  }, []);
};

export default useHandleFollowers;
