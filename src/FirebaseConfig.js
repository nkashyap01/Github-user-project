
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuCxUoz8fZ9AjaSheWBGZfySQjtAR28RA",
  authDomain: "github-new.firebaseapp.com",
  projectId: "github-new",
  storageBucket: "github-new.appspot.com",
  messagingSenderId: "99296057038",
  appId: "1:99296057038:web:2b5aad051059b38d36a29f"
};


const app = initializeApp(firebaseConfig);
 const auth =  getAuth();

export default auth;



