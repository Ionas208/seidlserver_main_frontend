import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Statistics() {

    const [memData, setMemData] = useState(null)

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` 
        }
    });

    const getMemStats = () =>{
        api.get('/stats/mem').then(res => {
            console.log(res.data)
            
            setMemData(res.data)
       }).catch((err) => {
            console.log(err)
        })
    }
    

    return (
        <Layout servername="seidlserver">
            <h1>Statistics</h1>
            <button onClick={getMemStats}>Get Mem Stats</button>
            <LineChart width={600} height={300} data={memData}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </Layout>
    )
}

export default Statistics
