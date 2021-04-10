import React from 'react'
import '../styles/Login.css'

function Login() {
    return (
        <div className="login-container noselect">
            <div className="login-content">
                <h1>Login</h1>
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <button className="bt-standard align-right bt-login">Login</button>
            </div>
        </div>
    )
}

export default Login