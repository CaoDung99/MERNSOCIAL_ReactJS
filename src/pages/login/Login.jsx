import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Lamasocail
                </h3>
                <span className="loginDesc">
                    Conect with friend and the world around you on Lamasocail
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' type="email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginFogot">Forgot Password</span>
                    <button className="loginRegisterButton">Create n New Account</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
