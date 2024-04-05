
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "github-new.firebaseapp.com",
  projectId: "github-new",
  storageBucket: "github-new.appspot.com",
  messagingSenderId: "99296057038",
  appId:process.env.REACT_APP_FIREBASE_ID
};


const app = initializeApp(firebaseConfig);
 const auth =  getAuth();

export default auth;



