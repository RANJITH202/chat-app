import React, { useContext, useEffect, useState } from "react";
import "./ChatBox.css";
import "../../App.css";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TextBox from "./TextBox";
import appContext from "../../Context";
import { getMessagesByUsers } from "../../service/API";
import { resposeStatus } from "../../service/constants";
import makeToast from "../../Toastr";
const moment = require("moment");

const ChatText = () => {
  const { userId, participantsDetails, socket } = useContext(appContext);
  const [messages, setMessages] = useState([]);
  const getMsg = async () => {
    const msg = await getMessagesByUsers(userId, participantsDetails._id);
    if (msg?.data?.info === resposeStatus.SUCCESS) {
      if (msg?.data?.messages?.length > 0) {
        setMessages(msg.data.messages);
      } else {
        makeToast(resposeStatus.ERROR, "No messages found");
      }
    } else {
      makeToast(resposeStatus.ERROR, "Error fetching messages");
    }
  };
  const sendMessage = ({ message }) => {
    socket.emit("send_message", {
      message,
      senderId: userId,
      receiverId: participantsDetails._id,
    });
  };
  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (msg) => {
        if (msg?.senderId === userId || msg?.receiverId === userId) {
        setMessages((prev) => [...prev, msg]);
        }
      });

      return () => {
        socket.off("receive_message");
      };
    }
  }, [socket, userId]);
  useEffect(() => {
    if (participantsDetails?._id) {
      getMsg();
    }
  }, [participantsDetails?._id]);

  useEffect(() => {
    document
      .querySelector(".chat-text-container > div:last-child")
      ?.scrollIntoView();
  }, [messages]);
  return (
    <>
      <div className="chat-text-container">
        {/* <ScrollToBottom> */}
        {messages.map((message) => (
          <div
            key={message._id}
            className={message.senderId === userId ? "chat-right" : "chat-left"}
          >
            {message.senderId === userId && <div className="sp"></div>}
            <div className="message">
              <p className="no-margin">{message.message}</p>
              <div className="check-time">
                <span className="no-margin font-size-12">
                  {moment(message.createdAt).format("hh:mm A")}
                </span>
                {message.senderId === userId &&
                  (message.isSeen ? (
                    <DoneAllIcon className="double-check-icon seen" />
                  ) : message.isRecieved ? (
                    <DoneAllIcon className="double-check-icon received" />
                  ) : message.isSent ? (
                    <CheckIcon className="check-icon sent" />
                  ) : (
                    ""
                  ))}
              </div>
            </div>
            {message.senderId !== userId && <div className="sp"></div>}
          </div>
        ))}
        {/* </ScrollToBottom> */}
      </div>
      <TextBox sendMessage={sendMessage} />
    </>
  );
};

export default ChatText;
