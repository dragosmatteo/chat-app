import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

function LogOut() {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
            backgroundColor: "#FAFAFA",
            top: 0,
            borderBottom: "solid 1px lightgray",
            zIndex: "10",
            marginBottom: "30px",
         }}
      >
         <Button
            variant="outlined"
            style={{
               padding: "10px",
               fontSize: "15px",
               borderRadius: "0",
               fontWeight: "600",
               margin: "10px",
            }}
            onClick={() => auth.signOut()}
         >
            Sign Out
         </Button>
      </div>
   );
}

export default LogOut;
