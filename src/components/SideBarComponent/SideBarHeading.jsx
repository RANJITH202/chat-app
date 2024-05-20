import React, { useContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './SideBar.css';
import appContext from '../../Context';
import { localStorageKey, resposeStatus } from '../../service/constants';
import makeToast from '../../Toastr';

const SideBarHeading = ({profilePic, username, profileStatus}) => {
  const {isDarkMode, setDarkMode, setIsLogin,} = useContext(appContext);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem(localStorageKey.TOKEN);
    setIsLogin(false);
    makeToast(resposeStatus.SUCCESS, 'Logged out Successfully');
  }

  return (
    <>
      <div className="profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="profile-container">
        <div className="profile-contents">
          <MoreVertIcon className='more-vert'/>
          <h2 className='username no-margin text-wrap'>{username}</h2>
          <p className='profile-status no-margin text-wrap'>{profileStatus}</p>
        </div>
        <div className="profile-btns">
          <DarkModeSwitch className='prof-btns'
          style={{ marginBottom: '1rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
          />
          <LogoutIcon  className='prof-btns' onClick={handleLogout}/>
        </div>
        
      </div>
    </>
  )
}

export default SideBarHeading