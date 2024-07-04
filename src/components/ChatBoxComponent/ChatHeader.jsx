import React, { useContext } from 'react'
import './ChatBox.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import appContext from '../../Context';

const ChatHeader = () => {
  const { participantsDetails } = useContext(appContext);
  return (
    <div className='chat-header'>
      <div className="slide-container">
      <div className="slide-profile-pic">
        <img src={participantsDetails?.profilePic} alt="Profile Pic" />
      </div>
      <div className="slide-contents">
        <div className="user-msg">
          <p className="username no-margin text-wrap">{`${participantsDetails?.firstName} ${participantsDetails?.lastName}`}</p>
          <p className="message no-margin text-wrap">{participantsDetails?.profileStatus}</p>
        </div>
        <div className="chat-header-opt">
          <CallIcon className='chat-call'/>
          <VideocamIcon className='chat-video'/>
          <MoreVertIcon className='chat-more-vert'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChatHeader