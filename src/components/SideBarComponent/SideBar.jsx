import React from 'react'
import SideBarHeading from './SideBarHeading'
import SideSlides from './SideSlides';
import './SideBar.css';

const SideBar = () => {
  const profile = {
    profilePic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    username: 'Ranjith',
    profileStatus: 'Why do we fall? So we can learn to pick ourselves up.'
  };
  const slides = [{
    id: 1,
    username: 'John Doe',
    lastMsg: 'Slide 1 lastMsg',
    lastMsgTime: '10:00 PM'
  }, {
    id: 2,
    username: 'Sithik',
    lastMsg: 'Slide 2 lastMsg',
    lastMsgTime: '11:00 PM'
  }, {
    id: 3,
    username: 'Slide 3',
    lastMsg: 'Slide 3 Content',
    lastMsgTime: '05:00 AM'
  }];

  return (
    <div className='sidebar'>
      <div className='side-header-container'>
        <SideBarHeading profilePic={profile.profilePic} profileStatus={profile.profileStatus} username={profile.username} />
      </div>
      <div className="side-slides">
        {slides.map(slide => (
          <SideSlides key={slide.id} profilePic={profile.profilePic} username={slide.username} lastMsg={slide.lastMsg} lastMsgTime={slide.lastMsgTime} />
        ))}
      </div>
    </div>
  )
}

export default SideBar