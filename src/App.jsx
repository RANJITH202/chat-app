import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import LoginPage from './pages/Login-Register/LoginPage';
import appContext from './Context';
import { localStorageKey, resposeStatus } from './service/constants';
import io from 'socket.io-client';
import makeToast from './Toastr';
import jwtDecode from 'jwt-decode';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);
  const [socket, setSocket] = useState(null);
  const [participantsDetails, setParticipantsDetails] = useState({});

  const setupSocket = () => {
    const token = localStorage.getItem(localStorageKey.TOKEN);
    if(token && !socket) {
      const newSocket = io("http://localhost:3001", {
        query: {
          token,
        },
      });
      newSocket.on('disconnect', () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast(resposeStatus.ERROR, "Socket Disconnected!");
      });

      newSocket.on('connect', () => {
        makeToast(resposeStatus.SUCCESS, "Socket Connected!");
      });
      setSocket(newSocket);
    }
  }
  const checkLogin = () => {
    const token = localStorage.getItem(localStorageKey.TOKEN);
    if(token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
      setIsLogin(true);
    }
  }
  useEffect(() => {
    checkLogin();
    setupSocket();
    // Function to clear local storage
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    // Add event listener for beforeunload  
    window.addEventListener('beforeunload', clearLocalStorage);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const contextItems = {
    isLogin,
    setIsLogin,
    userId,
    setUserId,
    isDarkMode, 
    setDarkMode,
    socket, 
    setSocket,
    participantsDetails, 
    setParticipantsDetails,
  };

  return (
    <appContext.Provider value={contextItems}>
      <div className="position-class App">
        {
          isLogin ? 
          <Main/> :
          <LoginPage setupSocket={setupSocket}/>
        }
      </div>
    </appContext.Provider>
  );
}

export default App;
