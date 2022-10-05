// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Ea0GFw0liegle1LZLPM873o7v6SBOnA",
  authDomain: "yesenia-8fb43.firebaseapp.com",
  projectId: "yesenia-8fb43",
  storageBucket: "yesenia-8fb43.appspot.com",
  messagingSenderId: "1002593770229",
  appId: "1:1002593770229:web:349880123637a28f2643bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);