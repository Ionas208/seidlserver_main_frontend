import React from 'react'
import Layout from '../components/Layout'
import { Redirect } from 'react-router-dom';
import validate from '../util/validate'

function Statistics({open, setOpen}) {
    
    if (validate()) {
        return <Redirect to="/login" />
    
    }
    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen}>
            <h1>Statistics</h1>
        </Layout>
    )
}

export default Statistics
