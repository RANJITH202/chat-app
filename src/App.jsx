import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import LoginPage from './pages/Login-Register/LoginPage';
import appContext from './Context';
import { localStorageKey, resposeStatus } from './service/constants';
import { io } from 'socket.io-client';
import makeToast from './Toastr';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);
  const [socket, setSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem(localStorageKey.TOKEN);
    if(token && !socket) {
      const newSocket = io('http://localhost:3000', {
        data: {
          token: localStorage.getItem(localStorageKey.TOKEN),
        }
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

  useEffect(() => {
    setupSocket();
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
