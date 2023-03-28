
//Configuracion de psyapp
// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
//import{ GoogleAuthProvider ,getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";
//// TODO: Add SDKs for Firebase products that you want to use
//// https://firebase.google.com/docs/web/setup#available-libraries
//
//// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyAMED3UtcE-GfMjeJ2K5on-LXkzvmggGJE",
//  authDomain: "psyapp-722c0.firebaseapp.com",
//  projectId: "psyapp-722c0",
//  storageBucket: "psyapp-722c0.appspot.com",
//  messagingSenderId: "1010699773060",
//  appId: "1:1010699773060:web:9a098a87df80aba438ced1"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//export const auth = getAuth(app);
//export const db = getFirestore(app);
//export const storage = getStorage(app);
//
//export const googleProvider = new GoogleAuthProvider();
//googleProvider.setCustomParameters({ prompt: "select_account" });

//Configuracion de psyapp prueba
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ GoogleAuthProvider ,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04b02ef9xC7H7h_GnHIfwEe65rt1f6IQ",
  authDomain: "psyapp-prueba.firebaseapp.com",
  projectId: "psyapp-prueba",
  storageBucket: "psyapp-prueba.appspot.com",
  messagingSenderId: "132513303818",
  appId: "1:132513303818:web:e3e14d1c2cf3cf9043bef3",
  measurementId: "G-B69ERLVDW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });