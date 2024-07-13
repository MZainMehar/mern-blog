// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3e19c.firebaseapp.com",
  projectId: "mern-auth-3e19c",
  storageBucket: "mern-auth-3e19c.appspot.com",
  messagingSenderId: "769923848740",
  appId: "1:769923848740:web:e93edc6ac7e340c12416b1",
  measurementId: "G-PCP7PYNSQK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);