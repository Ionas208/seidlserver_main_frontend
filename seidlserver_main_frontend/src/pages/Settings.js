import React from 'react'
import Layout from '../components/Layout'
import { Redirect, Link } from 'react-router-dom';
import validate from '../utils/validate'

function Settings({open, setOpen}) {
    
    if (validate()) {
        return <Redirect to="/login" />
    }

    const logout = () => {
        localStorage.removeItem("jwt")
    }
    
    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen}>
            <button onClick={logout} className="bt-standard" ><Link to="/login">logout</Link></button>
        </Layout>
    )
}

export default Settings
