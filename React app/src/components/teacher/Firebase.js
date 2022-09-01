// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWN4AvYwrZUXWJ-4F0B9GeVU_Ga3TLtTY",
  authDomain: "react-f0663.firebaseapp.com",
  projectId: "react-f0663",
  storageBucket: "react-f0663.appspot.com",
  messagingSenderId: "972280120039",
  appId: "1:972280120039:web:e3f4d7da42af587a661842",
  measurementId: "G-1TB67B3C02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
