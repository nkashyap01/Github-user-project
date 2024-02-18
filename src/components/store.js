import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "github",
  initialState: {
    name: null,
    userInfo:null,
  },
  reducers: {
    setName: (state, action) => {
      state.name=action.payload;
    },
    setUserInfo:(state,action)=>{
      state.userInfo=action.payload;
    }
  },
});

const appStore = configureStore({
  reducer: {
    github: appSlice.reducer,

  },
});

export default appStore;
export const {  setName,setUserInfo } = appSlice.actions;
