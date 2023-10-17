// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu_cRzsjuCP2m8IcQ5pSBkq_jpFZ5hxzY",
  authDomain: "buybusy1-cc8c8.firebaseapp.com",
  projectId: "buybusy1-cc8c8",
  storageBucket: "buybusy1-cc8c8.appspot.com",
  messagingSenderId: "1037369591979",
  appId: "1:1037369591979:web:8515a826ee06cc913d0fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);