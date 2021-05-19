import React from 'react'
import Layout from '../components/Layout'
import { Redirect } from 'react-router-dom';
import validate from '../util/validate'

function Settings({open, setOpen}) {
    
    if (validate()) {
        return <Redirect to="/login" />
    }
    
    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen}>
            <h1>Settings</h1>
        </Layout>
    )
}

export default Settings
