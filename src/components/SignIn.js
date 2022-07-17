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
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
         }}
      >
         <Button
            variant="outlined"
            style={{
               padding: "20px",
               fontSize: "20px",
               borderRadius: "0",
               fontWeight: "600",
            }}
            onClick={signInWithGoogle}
         >
            Sign In With Google
         </Button>
      </div>
   );
};
export default signIn;
