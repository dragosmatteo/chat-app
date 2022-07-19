import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
   apiKey: process.env.REACT_APP_FIREBASE_API,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_AUTH_ID,
   storageBucket: process.env.REACT_APP_STORAGE,
   messagingSenderId: process.env.REACT_APP_MESSAGING,
   appId: process.env.REACT_APP_ID,
   measurementId: process.env.REACT_APP_MEASUREMENT,
});

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();

export { auth, db };
