import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArkDAhKi7unJZfwH-96FIph_g8hJhIWGY",
    authDomain: "methoddataproject.firebaseapp.com",
    projectId: "methoddataproject",
    storageBucket: "methoddataproject.appspot.com",
    messagingSenderId: "395255996780",
    appId: "1:395255996780:web:62bcf71eafacc19f059349",
    measurementId: "G-WLM1SMBDVB"
  };

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
