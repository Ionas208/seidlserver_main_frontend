import React from 'react'
import Layout from '../components/Layout'
import StateOperator from '../components/StateOperator'
import { Redirect } from 'react-router-dom';
import validate from '../utils/validate'

function Overview({open, setOpen}) {

    if (validate()) {
        return <Redirect to="/login" />
    }

    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen} >
            <h1>Overview</h1>

            <StateOperator />
        </Layout>
    )
}

export default Overview
