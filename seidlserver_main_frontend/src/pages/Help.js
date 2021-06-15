import React from 'react'
import { Redirect } from 'react-router-dom'

function Help() {
    
    localStorage.removeItem('jwt')

    return (
        <Redirect to="/login" />
    )
}

export default Help
