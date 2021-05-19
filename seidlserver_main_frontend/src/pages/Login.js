import React from 'react'
import LayoutWithoutSidebar from '../components/LayoutWithoutSidebar'
import '../styles/Login.css'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import jwt from 'jsonwebtoken'
import validate from '../util/validate'

function Login() {

    if (!validate()) {
        return <Redirect to="/overview" />
    }

    const api = axios.create({
        baseURL: 'http://localhost:8080/'
    });

    const performLogin = (email, password) => {
         api.post('/auth/login', {
             email:"martin",
             password:"martin"
         }).then(res => {
            localStorage.setItem("jwt", res.data)
            let jWt = jwt.decode(res.data)
            console.log(jWt)
        }).catch((err) => {
             console.log(err)
         })
    }

    
    const performLogout = () => {
        localStorage.removeItem("jwt")
    }


    return (
        <LayoutWithoutSidebar servername="seidlserver">
            <div className="login-container noselect">
                <div className="login-content">
                    <h1>Login</h1>
                    <p>Email</p>
                    <input type="email" />
                    <p>Password</p>
                    <input type="password" />
                    <div className="text-and-bt">
                        <span className="small-txt">No Account? <Link to="/register">Register</Link></span>
                        <button onClick={performLogin} className="bt-standard align-right">Login</button>
                    </div>
                </div>
            </div>
        </LayoutWithoutSidebar>
    );
}

export default Login