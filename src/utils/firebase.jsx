// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1KlBxLN3PQUfvTGvXXY8hETn6vSLU_xs",
  authDomain: "netflixgpt-6c25c.firebaseapp.com",
  projectId: "netflixgpt-6c25c",
  storageBucket: "netflixgpt-6c25c.firebasestorage.app",
  messagingSenderId: "83353582808",
  appId: "1:83353582808:web:6e94e38872d730097e2bad",
  measurementId: "G-KM245WKN22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
