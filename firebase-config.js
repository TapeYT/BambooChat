// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3T6-J7fcIysgRRNC6PU1h1AGvmBhe12s",
  authDomain: "baboochat2.firebaseapp.com",
  databaseURL: "https://baboochat2-default-rtdb.firebaseio.com",
  projectId: "baboochat2",
  storageBucket: "baboochat2.appspot.com",
  messagingSenderId: "641194041752",
  appId: "1:641194041752:web:7699a3e5369066628a8bed",
  measurementId: "G-1TZ5810DP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
