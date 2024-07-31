import React, { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SideBar.css";
import appContext from "../../Context";
import { localStorageKey, responseStatus } from "../../service/constants";
import makeToast from "../../Toastr";
import { Tooltip } from "@mui/material";

const SideBarHeading = ({profilePic, firstName, lastName, profileStatus}) => {
  const {isDarkMode, setDarkMode, setIsLogin, socket, setSocket} = useContext(appContext);

  const toggleDarkMode = (checked) => {
    document.getElementById('root').dataset.theme = checked ? 'dark' : 'light';
    setDarkMode(checked);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem(localStorageKey.TOKEN);
    setIsLogin(false);
    makeToast(responseStatus.SUCCESS, "Logged out Successfully");
    setTimeout(() => {
      if(socket) {
        socket.disconnect();
        setSocket(null);
        makeToast(responseStatus.ERROR, "Socket Disconnected!");
      }
    }, 1000);
  };



  return (
    <>
      <div className="profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="profile-container">
        <div className="profile-contents">
          <MoreVertIcon className="more-vert" />
          <h2 className="username no-margin text-wrap">{firstName} {lastName}</h2>
          <Tooltip title={profileStatus} placement="bottom">
            <p className="profile-status no-margin text-wrap">
              {profileStatus}
            </p>
          </Tooltip>
        </div>
        <div className="profile-btns">
          <Tooltip title={!isDarkMode ? 'Light Mode' : 'Dark Mode'} placement="bottom">
            <div>
              <DarkModeSwitch
                className="prof-btns"
                style={{ marginBottom: "1rem" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={20}
                />
            </div>
          </Tooltip>
          <Tooltip title='Logout' placement="bottom">
            <LogoutIcon className="prof-btns" onClick={handleLogout} />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default SideBarHeading;
