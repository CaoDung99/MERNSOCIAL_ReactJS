import React from 'react'
import './register.css'
export default function Register () {
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
                    <input placeholder='UserName' type="text" className="loginInput" />
                    <input placeholder='Email' type="email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <input placeholder='Password again' type="password" className="loginInput" />
                    
                    <button className="loginButton">Sign Up</button>             
                    <button className="loginReisterButton">Log into Account </button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
