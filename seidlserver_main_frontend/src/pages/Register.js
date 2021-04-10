import React from 'react'
import '../styles/Login.css'

function Register() {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Register</h1>
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <p>Repeat Password</p>
                <input type="password" />
                <button className="bt-standard align-right bt-login">Register</button>
            </div>
        </div>
    )
}

export default Register