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
            <div className="settings-container">
                <div className="settings-section">
                    <h2>Change Username</h2>
                    <p>New Username</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="password" />
                    <button className="bt-standard">Change</button>
                    <hr />
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
                    <hr />
                </div>
                <button onClick={logout} className="bt-standard" ><Link to="/login">logout</Link></button>
            </div>
        </Layout>
    )
}

export default Settings
