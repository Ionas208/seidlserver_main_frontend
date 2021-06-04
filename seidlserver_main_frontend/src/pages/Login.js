import React, { useState } from 'react'
import LayoutWithoutSidebar from '../components/LayoutWithoutSidebar'
import '../styles/Login.css'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import validate from '../utils/validate'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    });

    if (!validate() || loggedIn) {
        return <Redirect to="/gameservers" />
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
         api.post('/auth/login', {
             "email": email,
             "password": password
         }).then(res => {
            localStorage.setItem("jwt", res.data)
            setLoggedIn(true)
        }).catch((err) => {
            alert("Login failed")
        })
    }

    return (
        <LayoutWithoutSidebar servername="SEIDLSERVER">
            <form onSubmit={handleSubmit}>
                <div className="login-container noselect">
                    <div className="login-content">
                        <h1>Login</h1>
                        <p>Email</p>
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                        <p>Password</p>
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                        <div className="text-and-bt">
                            <span className="small-txt">No Account? <Link to="/register">Register</Link></span>
                            <button onClick={handleSubmit} className="bt-standard align-right">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </LayoutWithoutSidebar>
    );
}

export default Login