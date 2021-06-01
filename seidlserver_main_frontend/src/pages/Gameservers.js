import React from 'react'
import Layout from '../components/Layout'
import { Redirect } from 'react-router-dom';
import validate from '../utils/validate'

function Gameservers({open, setOpen}) {
    
    if (validate()) {
        return <Redirect to="/login" />
    }

    return (
        <Layout servername="SEIDLSERVER" open={open} setOpen={setOpen} >
            <h1>Gameservers</h1>
        </Layout>
    )
}

export default Gameservers
