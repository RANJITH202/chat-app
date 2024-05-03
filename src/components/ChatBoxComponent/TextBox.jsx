import React, { useState } from "react";
import "./ChatBox.css";
import "../../App.css";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from '@mui/icons-material/Send';

const TextBox = ({sendMessage}) => {
  const [inputMessage, setInputMessage] = useState("");
  const handleChange = (event) => {
    setInputMessage(event.target.value);
  };
  const handleClick = () => {
    setInputMessage("");
    const current = new Date();
    const formattedTime = current.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    sendMessage({
      id: Math.random(),
      message: inputMessage,
      time: formattedTime,
      status: "received",
      user: "me",
    });
  };
  return (
    <div className="text-box-con">
      <div className="chat-footer">
        <MoodIcon className="emoji-btn"/>
        <textarea value={inputMessage} onChange={handleChange} placeholder="Type a message"></textarea>
        <div className="icons">
          <AttachFileIcon className="file-attach-btn" />
          <CameraAltIcon className="camera-btn"/>
        </div>
        <div className="send-mic">
          {
          inputMessage ? <SendIcon className="send-btn" onClick={handleClick}/> :
          <KeyboardVoiceIcon className="mic-btn"/>
          }
        </div>
      </div>
    </div>
  );
};

export default TextBox;
