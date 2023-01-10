// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB04iAjAij6ptnXqP-rd9yVzeD1Z0nR-Js",
  authDomain: "gods-own-properties.firebaseapp.com",
  projectId: "gods-own-properties",
  storageBucket: "gods-own-properties.appspot.com",
  messagingSenderId: "898499027475",
  appId: "1:898499027475:web:a3d28095e2590d478255e6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
