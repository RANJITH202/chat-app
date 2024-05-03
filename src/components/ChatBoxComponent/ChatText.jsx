import React, { useState } from "react";
import "./ChatBox.css";
import "../../App.css";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TextBox from "./TextBox";

const ChatText = () => {
  const newArray = [
    {
      id: 1,
      message: "Hi, Elias",
      time: "4:00 PM",
      status: "seen",
      user: "me",
    },
    {
      id: 2,
      message: "hey, how are you?",
      time: "4:00 PM",
      status: "received",
      user: "other",
    },
    {
      id: 3,
      message: "I'm fine, how about you?",
      time: "4:01 PM",
      status: "received",
      user: "me",
    },
    {
      id: 4,
      message: "Had lunch?",
      time: "4:01 PM",
      status: "sent",
      user: "me",
    },
  ];
  const [messages, setMessages] = useState(newArray);
  const sendMessage = (msg) => {
    setMessages([...messages, msg]);
  }
  return (
    <>
      <div className="chat-text-container">
        {messages.map((message) => (
          <div key={message.id} className={message.user === "me" ? "chat-right" : "chat-left"}>
            {message.user === "me" && <div className="sp"></div>}
            <div className="message">
              <p className="no-margin">{message.message}</p>
              <div className="check">
                <span className="no-margin font-size-12">{message.time}</span>
                {message.user === "me" && (message.status === "sent" ? (
                  <CheckIcon className="check-icon sent" />
                ) : message.status === "received" ? (
                  <DoneAllIcon className="double-check-icon received" />
                ) : message.status === "seen" ? (
                  <DoneAllIcon className="double-check-icon seen" />
                ) : (
                  ""
                ))}
              </div>
            </div>
            {message.user === "other" && <div className="sp"></div>}
          </div>
        ))}
      </div>
      <TextBox sendMessage={sendMessage}/>
    </>
  );
};

export default ChatText;
