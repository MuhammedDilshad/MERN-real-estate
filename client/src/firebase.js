// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-e45d2.firebaseapp.com",
  projectId: "mern-estate-project-e45d2",
  storageBucket: "mern-estate-project-e45d2.appspot.com",
  messagingSenderId: "737390922313",
  appId: "1:737390922313:web:5a53a50ddaa459e0878d98",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
