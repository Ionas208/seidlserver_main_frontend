import React from 'react'
import Layout from '../components/Layout'
import { Redirect } from 'react-router-dom';
import validate from '../utils/validate'
import '../styles/Settings.css'
import { useState } from 'react';
import axios from 'axios'

function Settings({ open, setOpen }) {

    const [newUsernameInput, setnewUsernameInput] = useState('')
    const [passwordUsername, setPasswordUsername] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const [passwordPassword, setPasswordPassword] = useState('')

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    const handleChangeUsername = (e) => {
        e.preventDefault()
        api.post('/auth/change/email?password=' + passwordUsername + '&email=' + newUsernameInput)
        .then(res => {
           localStorage.removeItem('jwt')
           window.location.reload();
       }).catch((err) => {
               console.error(err)
           alert("change failed")
       })
    }

    const handleChangePassword = (e) => {
        e.preventDefault()
        if(newPassword1 === newPassword2) {
            api.post('/auth/change/password?newPassword=' + newPassword1 + '&oldPassword=' + passwordPassword)
            .then(res => {
               localStorage.removeItem('jwt')
               window.location.reload();
           }).catch((err) => {
               console.error(err)
               alert("change failed")
           })
        }
        else {
            alert('passwords don\'t match')
        }
    }


    if (validate()) {
        return <Redirect to="/login" />
    }

    return (
        <Layout servername="SEIDLSERVER" open={open} setOpen={setOpen}>
            <h1 className="stat-h1">Settings</h1>
            <div className="settings-container noselect">
                <form onSubmit={handleChangeUsername} className="settings-section">
                        <h2>Change Username</h2>
                        <p>New Username</p>
                        <input type="text" onChange={e => setnewUsernameInput(e.target.value)} />
                        <p>Password</p>
                        <input type="password" onChange={e => setPasswordUsername(e.target.value)} />
                        <button className="bt-standard" onClick={handleChangeUsername}>Change</button>
                </form>
                <form onSubmit={handleChangePassword} className="settings-section">
                        <h2>Change Password</h2>
                        <p>New Password</p>
                        <input type="password" onChange={e => setNewPassword1(e.target.value)} />
                        <p>Repeat Password</p>
                        <input type="password" onChange={e => setNewPassword2(e.target.value)} />
                        <p>Old Password</p>
                        <input type="password" onChange={e => setPasswordPassword(e.target.value)} />
                        <button className="bt-standard" onClick={handleChangePassword}>Change</button>
                </form>
                {/* <button onClick={logout} className="bt-standard" style={{ marginBottom: '5%' }} ><Link to="/login">logout</Link></button> */}
            </div>
        </Layout>
    )
}

export default Settings
