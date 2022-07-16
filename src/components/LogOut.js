import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

const LogOut = () => {
   //    const LogOut = async () => {
   //       try {
   //          await firebase.auth().signOut();
   //       } catch (error) {
   //          console.error(error);
   //       }
   //    };

   return <Button onClick={() => auth.signOut()}>Log Out</Button>;
};

export default LogOut;
