import React, { useState } from 'react'
import LayoutWithoutSidebar from '../components/LayoutWithoutSidebar'
import '../styles/Login.css'
import { Link, Redirect } from 'react-router-dom';
import validate from '../utils/validate'
import axios from 'axios'

function Register() {
    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    });

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const register = () => {
        if (password === secondPassword) {
            api.post('/auth/register', {
                first_name: "",
                last_name: "",
                email: email,
                password: password
            }).then(res => {
                api.post('/auth/login', {
                    "email": email,
                    "password": password
                }).then(res => {
                    localStorage.setItem("jwt", res.data)
                    setLoggedIn(true)
                }).catch((err) => {
                    alert("Login failed")
                })
            }).catch((err) => {
                alert('Registration failed')
                console.log(err)
            })
        }
        else {
            alert('Passwords are not the same')
        }

    }

    if (!validate() || loggedIn) {
        return <Redirect to="/login" />
    }
    return (
        <LayoutWithoutSidebar servername="SEIDLSERVER">
            <form onSubmit={register}>

                <div className="login-container noselect">
                    <div className="login-content">
                        <h1>Register</h1>
                        <p>Email</p>
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                        <p>Password</p>
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                        <p>Repeat Password</p>
                        <input type="password" value={secondPassword} onChange={event => setSecondPassword(event.target.value)} />
                        <div className="text-and-bt">
                            <span className="small-txt">Already have an Account? <Link to="/login">Login</Link></span>
                            <button className="bt-standard align-right" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </LayoutWithoutSidebar>
    )
}

export default Register