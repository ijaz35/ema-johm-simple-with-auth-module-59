// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtTmRtb5nDG4XipDnZrh50PuTucIaMcLs",
    authDomain: "ema-john-router-59.firebaseapp.com",
    projectId: "ema-john-router-59",
    storageBucket: "ema-john-router-59.appspot.com",
    messagingSenderId: "520395439858",
    appId: "1:520395439858:web:c1a30603c47cf124c5da6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;