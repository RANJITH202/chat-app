import React, { useContext } from 'react';
import ChatHeader from './ChatHeader';
import ChatText from './ChatText';
import './ChatBox.css';
import '../../App.css';
import appContext from '../../Context';

const ChatBox = () => {
  const { participantsDetails } = useContext(appContext);
  return (
    <div className='chat-box'>
      <ChatHeader />
      <ChatText />
    </div>
  )
}

export default ChatBox