import { React, useState, useEffect, useRef } from "react";
import LogOut from "./LogOut";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";

const Chat = () => {
   const scroll = useRef();
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      db.collection("messages")
         .orderBy("createdAt")
         .limit(100)
         .onSnapshot((query) => {
            const data = query.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
            }));

            setMessages(data);
         });
   }, []);

   return (
      <>
         <LogOut />
         {messages.map(({ id, text, photoURL, uid }) => (
            <div className="msgs">
               <div>
                  <div
                     key={id}
                     className={`msg ${
                        uid === auth.currentUser.uid ? "sent" : "received"
                     }`}
                  >
                     <img src={photoURL} alt="img" />
                     <p>{text}</p>
                  </div>
               </div>
            </div>
         ))}

         <SendMessage scroll={scroll} />

         <div ref={scroll}></div>
      </>
   );
};

export default Chat;
