// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfE63xoK09-JmhXcV9Gdi-jtyUzxRvpyw",
  authDomain: "world-policy-poll.firebaseapp.com",
  projectId: "world-policy-poll",
  storageBucket: "world-policy-poll.appspot.com",
  messagingSenderId: "63018428745",
  appId: "1:63018428745:web:395555aae9a0d1f8369298",
  measurementId: "G-8W0Q5HVB6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {app}