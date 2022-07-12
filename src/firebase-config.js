// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMiDmZZZ6ydl0rsL86lAv30PuymH6TC5k",
  authDomain: "tech-incubator-84e04.firebaseapp.com",
  projectId: "tech-incubator-84e04",
  storageBucket: "tech-incubator-84e04.appspot.com",
  messagingSenderId: "645726154004",
  appId: "1:645726154004:web:0be2da41e621ba86bd2601",
  measurementId: "G-H8SPS2NHQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app) //pass authentication to app; export across project