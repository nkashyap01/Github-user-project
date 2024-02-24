import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "github",
  initialState: {
    name: null,
    userInfo:null,
    isShowSignup:false,
    isShowSignin:false,
    isShowHeader: true,
  
  },
  reducers: {
    setName: (state, action) => {
      state.name=action.payload;
    },
    setUserInfo:(state,action)=>{
      state.userInfo=action.payload;
    },
    setIsShowSignup:(state,action)=>{
      state.isShowSignup=action.payload;
    },
    setIsShowSignin:(state,action)=>{
      state.isShowSignin=action.payload;
    },
    setIsShowHeader: (state, action) => { 
      state.isShowHeader = action.payload;
    },
   
  },
});

const appStore = configureStore({
  reducer: {
    github: appSlice.reducer,

  },
});

export default appStore;
export const {  setName,setUserInfo,setIsShowSignup,setIsShowSignin,setIsShowHeader  } = appSlice.actions;
