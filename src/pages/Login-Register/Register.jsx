import React from 'react'

const Register = () => {
  return (
    <div className='position-class login-container'>
      <div className='login-box'>
        <h1>Login</h1>
        <form className='login-form'>
          <div className='textbox'>
            <input type='text' placeholder='First Name' />
          </div>
          <div className='textbox'>
            <input type='text' placeholder='Last Name'/>
          </div>
          
          <button className='register-btn'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register