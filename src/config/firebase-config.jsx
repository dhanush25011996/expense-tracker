// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLDuHrhosuDAu9Tr-fGpeXl7_y6f8FDaw",
  authDomain: "expense-tracker-d3512.firebaseapp.com",
  projectId: "expense-tracker-d3512",
  storageBucket: "expense-tracker-d3512.appspot.com",
  messagingSenderId: "377881655043",
  appId: "1:377881655043:web:95475179f8608a7e66db36",
  measurementId: "G-HS3QMDYE97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy
