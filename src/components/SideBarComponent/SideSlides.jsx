import React from "react";
import "./SideBar.css";

const SideSlides = ({ profilePic, username, lastMsg, lastMsgTime }) => {
  return (
    <>
    <div className="slide-container">
      <div className="slide-profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="slide-contents">
        <div className="user-msg">
          <p className="username no-margin text-wrap">{username}</p>
          <p className="message no-margin text-wrap">{lastMsg}</p>
        </div>
        <div className="msg-time">
          <p className="time no-margin">{lastMsgTime}</p>
        </div>
      </div>
    </div>
    <div className="line"></div>
    </>
  );
};

export default SideSlides;
