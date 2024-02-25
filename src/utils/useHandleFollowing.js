import { useDispatch } from "react-redux";
import { setAllFollowersData, setAllFollowingData } from "../components/store";
import { useEffect } from "react";

const handleTemp = async (name) => {
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = await res.json();
  return data;
};

const useHandleFollowing = async (name) => {
  const dispatch = useDispatch();

  const handleFollowing = async () => {
    const res = await fetch(`https://api.github.com/users/${name}/following`);
    const data = await res.json();

    const allFollowingdData = await Promise.all(
      data.map(async ({ login }) => {
        return await handleTemp(login);
      })
    );

    dispatch(setAllFollowingData(allFollowingdData));
  };

  useEffect(() => {
    handleFollowing();
  }, []);
};

export default useHandleFollowing;
