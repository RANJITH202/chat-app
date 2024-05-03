import React from 'react'
import './Main.css'
import SideBar from '../../components/SideBarComponent/SideBar'
import ChatBox from '../../components/ChatBoxComponent/ChatBox'

const Main = () => {
  return (
    <div className='position-class'>
      <SideBar />
      <ChatBox />
    </div>
  )
}

export default Main