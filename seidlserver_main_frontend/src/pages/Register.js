import React from 'react'
import LayoutWithoutSidebar from '../components/LayoutWithoutSidebar'
import '../styles/Login.css'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <LayoutWithoutSidebar servername="seidlserver">
            <div className="login-container noselect">
                <div className="login-content">
                    <h1>Register</h1>
                    <p>Email</p>
                    <input type="email" />
                    <p>Password</p>
                    <input type="password" />
                    <p>Repeat Password</p>
                    <input type="password" />
                    <div className="text-and-bt">
                        <span className="small-txt">Already an Account? <Link to="/login">Login</Link></span>
                        <button className="bt-standard align-right">Register</button>
                    </div>
                </div>
            </div>
        </LayoutWithoutSidebar>
    )
}

export default Register