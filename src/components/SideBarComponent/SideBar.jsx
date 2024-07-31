import React, { useContext, useEffect, useState } from 'react'
import SideBarHeading from './SideBarHeading'
import SideSlides from './SideSlides';
import './SideBar.css';
import { responseStatus } from '../../service/constants';
import { getUserByID, getSideMessages } from '../../service/API';
import appContext from '../../Context';
import makeToast from '../../Toastr';

const SideBar = () => {
  const { userId, setParticipantsDetails } = useContext(appContext);
  const [userDetails, setUserDetails] = useState({});
  const [lastMsgList, setLastMsgList] = useState([]);
  const getUserDetails = async () => {  
    const user = await getUserByID(userId);
    if (user.data.info === responseStatus.SUCCESS) {
      setUserDetails(user.data.user);
    } else {
      makeToast(responseStatus.ERROR, "Error fetching user details");
    }
  }

  const getSideBarMessages = async () => {
    const messages = await getSideMessages(userId);
    if (messages.data.info === responseStatus.SUCCESS) {
      if(messages?.data?.messages?.length > 0) {
        setLastMsgList(messages.data.messages);
        setParticipantsDetails(messages.data.messages[0].userDetails[0]);
      } else {
        makeToast(responseStatus.ERROR, "No messages found");
      }
    } else {
      makeToast(responseStatus.ERROR, "Error fetching messages");
    }
  };

  useEffect(() => {
    getUserDetails();
    getSideBarMessages();
  },[]);

  return (
    <div className='sidebar'>
      <div className='side-header-container'>
        <SideBarHeading profilePic={userDetails.profilePic} profileStatus={userDetails.profileStatus} firstName={userDetails.firstName} lastName={userDetails.lastName} />
      </div>
      <div className="side-slides">
        {lastMsgList.map(slide => (
          <SideSlides key={slide._id} profilePic={slide.userDetails.profilePic} username={`${slide.userDetails[0].firstName} ${slide.userDetails[0].lastName}`} lastMsg={slide.message} lastMsgTime={slide.createdAt} userDetails={slide.userDetails[0]}/>
        ))}
      </div>
    </div>
  )
}

export default SideBar