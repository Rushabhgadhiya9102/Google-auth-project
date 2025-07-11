// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC12wHMBO0EQ_EyVTP9NN8kyiC9aEkX4kM",
  authDomain: "auth-project-a8716.firebaseapp.com",
  projectId: "auth-project-a8716",
  storageBucket: "auth-project-a8716.firebasestorage.app",
  messagingSenderId: "342549072011",
  appId: "1:342549072011:web:61fd6356d6ee816596ec8e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider};