// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBpFEReUX698IRJ81Qqw6YG8rtUdl6gBw",
  authDomain: "todolist-d795b.firebaseapp.com",
  projectId: "todolist-d795b",
  storageBucket: "todolist-d795b.appspot.com",
  messagingSenderId: "149403381939",
  appId: "1:149403381939:web:76c361af91757afee4c0c6",
  measurementId: "G-DHTQ31WC2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);