import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBmRfgVqELx0owkOAptTmMfgxHJnhiwr1I",
  authDomain: "expense-tracker-1e9b1.firebaseapp.com",
  projectId: "expense-tracker-1e9b1",
  storageBucket: "expense-tracker-1e9b1.appspot.com",
  messagingSenderId: "889300887411",
  appId: "1:889300887411:web:3762a9b9040104ffb70706",
  measurementId: "G-WDQCXKGWB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const db = getFirestore(app);
export {auth , db}