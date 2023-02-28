// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMED3UtcE-GfMjeJ2K5on-LXkzvmggGJE",
  authDomain: "psyapp-722c0.firebaseapp.com",
  projectId: "psyapp-722c0",
  storageBucket: "psyapp-722c0.appspot.com",
  messagingSenderId: "1010699773060",
  appId: "1:1010699773060:web:9a098a87df80aba438ced1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);