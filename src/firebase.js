import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyB9YrRp8FHCB-BdbLFCkrJLkSDVoExrXKE",
   authDomain: "fchat-bdf83.firebaseapp.com",
   projectId: "fchat-bdf83",
   storageBucket: "fchat-bdf83.appspot.com",
   messagingSenderId: "133024240451",
   appId: "1:133024240451:web:d3b2f0bf35b3c2a75255f6",
   measurementId: "G-06PQDELZ8S",
});

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();

export { auth, db };
