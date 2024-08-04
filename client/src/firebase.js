// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-89b84.firebaseapp.com",
  projectId: "mern-auth-89b84",
  storageBucket: "mern-auth-89b84.appspot.com",
  messagingSenderId: "989431451913",
  appId: "1:989431451913:web:65f642c30995a381e943d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);