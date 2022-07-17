import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessage = ({ scroll }) => {
   const [msg, setMsg] = useState("");

   async function handleSubmit(e) {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;

      await db.collection("messages").add({
         text: msg,
         photoURL,
         uid,
         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMsg("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
   }

   function empty(e) {
      let data = e.target.value;

      if (data !== "") {
         setMsg(data);
      } else {
         return;
      }
   }

   return (
      <div style={{ marginTop: "70px" }}>
         <form onSubmit={handleSubmit}>
            <div className="sendMsg">
               <Input
                  style={{
                     width: "78%",
                     fontSize: "15px",
                     fontWeight: "550",
                     marginLeft: "5px",
                     marginBottom: "-3px",
                  }}
                  placeholder="Message..."
                  type="text"
                  value={msg}
                  onChange={empty}
               />
               <Button
                  variant="outlined"
                  style={{
                     width: "10%",
                     fontSize: "15px",
                     fontWeight: "550",
                     margin: "4px 5% -13px 5%",
                     maxWidth: "200px",
                  }}
                  type="submit"
               >
                  Send
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SendMessage;
