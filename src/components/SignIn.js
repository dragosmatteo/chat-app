import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase.js";
import firebase from "firebase/compat/app";

const signIn = () => {
   const signInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth.useDeviceLanguage();

      try {
         await auth.signInWithPopup(provider);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <>
         <Button onClick={signInWithGoogle}>Sign In</Button>
      </>
   );
};
export default signIn;
