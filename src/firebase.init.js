// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG3X-lIRFySzNay2kY-MIREgI2k00B3DE",
  authDomain: "simple-auth-2a25c.firebaseapp.com",
  projectId: "simple-auth-2a25c",
  storageBucket: "simple-auth-2a25c.firebasestorage.app",
  messagingSenderId: "914745545706",
  appId: "1:914745545706:web:d299829678bc2c5fb8d893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth