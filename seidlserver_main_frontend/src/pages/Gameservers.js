import React from 'react'
import Layout from '../components/Layout'
import { Redirect } from 'react-router-dom';
import validate from '../utils/validate'
import StateOperator from '../components/StateOperator'
import GameserverList from '../components/GameserverList'

function Gameservers({open, setOpen}) {
    
    if (validate()) {
        return <Redirect to="/login" />
    }

    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen} >
            <h1>Gameservers</h1>
            <StateOperator />
            <GameserverList />
        </Layout>
    )
}

export default Gameservers
