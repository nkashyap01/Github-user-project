// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9RsOdwLoZ2e3FQ3jo3Jt_pWcCBfbiSe8",
  authDomain: "githhub-user.firebaseapp.com",
  projectId: "githhub-user",
  storageBucket: "githhub-user.appspot.com",
  messagingSenderId: "390644321045",
  appId: "1:390644321045:web:0d560b7aab43ae33fef71c",
  measurementId: "G-MFPPGGT23P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);