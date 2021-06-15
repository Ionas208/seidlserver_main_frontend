import React from 'react'
import Layout from '../components/Layout'
import { Redirect, Link } from 'react-router-dom';
import validate from '../utils/validate'
import '../styles/Settings.css'

function Settings({ open, setOpen }) {

    if (validate()) {
        return <Redirect to="/login" />
    }

    const logout = () => {
        localStorage.removeItem("jwt")
    }

    return (
        <Layout servername="SEIDLSERVER" open={open} setOpen={setOpen}>
            <h1 className="stat-h1">Settings</h1>
            <div className="settings-container">
                <div className="settings-section">
                    <h2>Change Username</h2>
                    <p>New Username</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="password" />
                    <button className="bt-standard">Change</button>
                </div>
                <div className="settings-section">
                    <h2>Change Password</h2>
                    <p>New Password</p>
                    <input type="password"/>
                    <p>Repeat Password</p>
                    <input type="password"/>
                    <p>Old Password</p>
                    <input type="password"/>
                    <button className="bt-standard">Change</button>
                </div>
                <button onClick={logout} className="bt-standard" style={{marginBottom: '5%'}} ><Link to="/login">logout</Link></button>
            </div>
        </Layout>
    )
}

export default Settings
