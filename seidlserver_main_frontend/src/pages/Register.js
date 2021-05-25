import React, {useState} from 'react'
import LayoutWithoutSidebar from '../components/LayoutWithoutSidebar'
import '../styles/Login.css'
import { Link, Redirect } from 'react-router-dom';
import validate from '../utils/validate'
import axios from 'axios'

function Register() {
    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    });

    const register = () =>{
        api.post('/auth/register', {
            first_name:"",
            last_name:"",
            email:"hans",
            password:"franz"
        }).then(res => {
            console.log(res)
       }).catch((err) => {
            console.log(err)
        })
    }

    if (!validate()) {
        return <Redirect to="/login" />
    }
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
                        <span className="small-txt">Already have an Account? <Link to="/login">Login</Link></span>
                        <button className="bt-standard align-right">Register</button>
                    </div>
                </div>
            </div>
        </LayoutWithoutSidebar>
    )
}

export default Register