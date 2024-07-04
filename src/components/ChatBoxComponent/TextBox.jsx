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
  const onEnterPress = (e) => {
    if(e.key === 'Enter') {
      handleClick();
    }
  }
  const handleClick = () => {
    setInputMessage("");
    sendMessage({
      message: inputMessage,
    });
  };
  return (
    <div className="text-box-con">
      <div className="chat-footer">
        <MoodIcon className="emoji-btn"/>
        <textarea value={inputMessage} onChange={handleChange} placeholder="Type a message" onKeyDown={onEnterPress}></textarea>
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
