import React from 'react';
import ChatHeader from './ChatHeader';
import ChatText from './ChatText';
import './ChatBox.css';
import '../../App.css';

const ChatBox = () => { 
  return (
    <div className='chat-box'>
      <ChatHeader />
      <ChatText />
    </div>
  )
}

export default ChatBox