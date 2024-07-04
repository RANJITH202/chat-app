import React, { useContext } from "react";
import "./SideBar.css";
import appContext from "../../Context";
const moment = require('moment');

const SideSlides = ({ profilePic, username, lastMsg, lastMsgTime, userDetails }) => {
  const { setParticipantsDetails } = useContext(appContext);
  lastMsgTime = moment(lastMsgTime).format('hh:mm A');
  const handleMsgClick = (e) => {
    e.preventDefault();
    setParticipantsDetails(userDetails);
  };
  return (
    <>
    <div className="slide-container">
      <div className="slide-profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="slide-contents" onClick={handleMsgClick}>
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
