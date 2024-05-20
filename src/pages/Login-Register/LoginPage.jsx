import React, { useContext, useRef, useState } from 'react'
import './Login-Register.css'
import { localStorageKey, resposeStatus } from '../../service/constants';
import makeToast from '../../Toastr';
import { getUsers, login } from '../../service/API';
import Register from './Register';
import appContext from '../../Context';

const LoginPage = () => {
  const { setIsLogin } = useContext(appContext);
  const [isRegister, setIsRegister] = useState(false); 
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    if(usernameRef.current.value === '' || passwordRef.current.value === '') 
      return makeToast(resposeStatus.ERROR, 'Please fill all the fields');
    const data = {
      emailId: usernameRef.current.value,
      password: passwordRef.current.value
    };
    const loginRes = await login(data);
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    if (loginRes.data.info === resposeStatus.SUCCESS) {
      localStorage.setItem(localStorageKey.TOKEN, loginRes.data.token);
      setIsLogin(true);
      makeToast(resposeStatus.SUCCESS, 'Login Successful');
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
            <input type='text' placeholder='Username' name='username' ref={usernameRef}/>
          </div>
          <div className='textbox'>
            <input type='password' placeholder='Password' name='password' ref={passwordRef} />
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