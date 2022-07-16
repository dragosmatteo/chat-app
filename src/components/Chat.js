import { React, useState, useEffect } from "react";
import LogOut from "./LogOut";
import { db } from "../firebase";

const Chat = () => {
   const [messages, setMessages] = useState([]);
   useEffect(() => {
      db.collection("messages")
         .orderBy("createdAt")
         .limit(50)
         .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
         });
   }, []);

   return (
      <>
         <LogOut />
         {messages.map(({ id, text, photoURL }) => (
            <div>
               <div key={id}>
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
               </div>
            </div>
         ))}
      </>
   );
};

export default Chat;
