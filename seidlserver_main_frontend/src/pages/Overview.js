import React from 'react'
import Layout from '../components/Layout'
import StateOperator from '../components/StateOperator'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken'

function Overview() {
      
  let dateNow = new Date();
  let user = jwt.decode(localStorage.getItem("jwt"))

  if(!user || user.exp * 1000 < dateNow.getTime()) {
    console.log("lol")
    return <Redirect to="/login" />
  }

    return (
        <Layout servername="seidlserver">
        <h1>Overview</h1>

        <StateOperator  />


            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
            <h1>Overview</h1>
        </Layout>
    )
}

export default Overview
