// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJ6VFz8jMWcIfQHGFueQnkHaPIwqB0rI",
  authDomain: "expense-tracker-ffede.firebaseapp.com",
  projectId: "expense-tracker-ffede",
  storageBucket: "expense-tracker-ffede.appspot.com",
  messagingSenderId: "1051040726635",
  appId: "1:1051040726635:web:f927bffaaae6bf755b3b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);