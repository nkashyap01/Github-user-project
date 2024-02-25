import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "github",
  initialState: {
    name: null,
    userInfo: null,
    isShowSignup: false,
    isShowSignin: false,
    isShowHeader: true,
    userRepos: null,
    copyUserRepos: null,
    allFollowersData: null,
    allFollowingData: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsShowSignup: (state, action) => {
      state.isShowSignup = action.payload;
    },
    setIsShowSignin: (state, action) => {
      state.isShowSignin = action.payload;
    },
    setIsShowHeader: (state, action) => {
      state.isShowHeader = action.payload;
    },
    setUserRepos: (state, action) => {
      state.userRepos = action.payload;
    },
    setCopyUserRepos: (state, action) => {
      state.copyUserRepos = action.payload;
    },
    setAllFollowersData: (state, action) => {
      state.allFollowersData = action.payload;
    },
    setAllFollowingData: (state, action) => {
      state.allFollowingData = action.payload;
    },
  },
});

const appStore = configureStore({
  reducer: {
    github: appSlice.reducer,
  },
});

export default appStore;
export const {
  setName,
  setUserInfo,
  setIsShowSignup,
  setIsShowSignin,
  setIsShowHeader,
  setUserRepos,
  setCopyUserRepos,
  setAllFollowersData,
  setAllFollowingData,
} = appSlice.actions;
