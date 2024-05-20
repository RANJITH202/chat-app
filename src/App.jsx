import { useState } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import LoginPage from './pages/Login-Register/LoginPage';
import appContext from './Context';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

  const contextItems = {
    isLogin,
    setIsLogin,
    userId,
    setUserId,
    isDarkMode, 
    setDarkMode,
  };

  return (
    <appContext.Provider value={contextItems}>
      <div className="position-class App">
        {
          isLogin ? 
          <Main/> :
          <LoginPage/>
        }
      </div>
    </appContext.Provider>
  );
}

export default App;
