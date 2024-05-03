import React from 'react'
import './ChatBox.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';

const ChatHeader = ({ profilePic = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', username='New Users', profileStatus='New Status' }) => {
  return (
    <div className='chat-header'>
      <div className="slide-container">
      <div className="slide-profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="slide-contents">
        <div className="user-msg">
          <p className="username no-margin text-wrap">{username}</p>
          <p className="message no-margin text-wrap">{profileStatus}</p>
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