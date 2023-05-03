// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKWkiiF0-PwU_S9pMG1rGr9o6vYa4XWQ",
  authDomain: "edu-match.firebaseapp.com",
  projectId: "edu-match",
  storageBucket: "edu-match.appspot.com",
  messagingSenderId: "910191811386",
  appId: "1:910191811386:web:5412433a36919530cd4e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth};