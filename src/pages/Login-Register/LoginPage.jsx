import React, { useContext, useRef, useState } from 'react'
import './Login-Register.css'
import { localStorageKey, resposeStatus } from '../../service/constants';
import makeToast from '../../Toastr';
import { getUsers, login } from '../../service/API';
import Register from './Register';
import appContext from '../../Context';

const LoginPage = ({setupSocket}) => {
  const { setIsLogin, setUserId } = useContext(appContext);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if(username === '' || password === '') 
      return makeToast(resposeStatus.ERROR, 'Please fill all the fields');
    const data = {
      emailId: username,
      password: password
    };
    const loginRes = await login(data);
    setUsername('');
    setPassword('');
    if (loginRes?.data?.info === resposeStatus.SUCCESS) {
      localStorage.setItem(localStorageKey.TOKEN, loginRes.data.token);
      setIsLogin(true);
      setUserId(loginRes.data.userId);
      makeToast(resposeStatus.SUCCESS, 'Login Successful');
      setTimeout(() => {
        setupSocket();
      }, 1000);
    } else {
      makeToast(resposeStatus.ERROR, 'Login Unsuccessful');
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    makeToast(resposeStatus.ERROR, 'Will be released soon!');
    // setIsRegister(true);
    // await getUsers();
  };
  return (
    <>
    {
      !isRegister ?
      <div className='position-class login-container'>
      <div className='login-box'>
        <h1>Login</h1>
        <form className='login-form'>
          <div className='textbox'> 
            <input type='text' placeholder='Username' name='username' value={username} onChange={handleUsernameChange}/>
          </div>
          <div className='textbox'>
            <input type='password' placeholder='Password' name='password' value={password} onChange={handlePasswordChange} />
          </div>
          <button type='submit' onClick={handleLogin} className='login-button'>Login</button>
          <button className='register-btn' onClick={handleRegister}>Register / New User</button>
        </form>
      </div>
    </div> :
    <Register/>
    }
    </>

  )
}

export default LoginPage