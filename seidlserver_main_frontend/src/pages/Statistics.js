import React, { useState } from 'react'
import Layout from '../components/Layout'
import validate from '../util/validate'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Statistics({open, setOpen}) {
    if (validate()) {
        return <Redirect to="/login" />
    }
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

            let furnished_data = []
            res.data.forEach((x)=>{
                let timestamp = x.timestamp
                let time = timestamp.split("T")[1]

                time = time.split(":")[0]+":"+time.split(":")[1]

                let mem = x.memFree
                let data_point = {"time":time, "memFree":mem}
                furnished_data.push(data_point)
            })
            setMemData(furnished_data)
       }).catch((err) => {
            console.log(err)
        })
    }
    
    
    return (
        <Layout servername="seidlserver" open={open} setOpen={setOpen}>
            <h1>Statistics</h1>
            <button onClick={getMemStats}>Get Mem Stats</button>
            <LineChart width={600} height={300} data={memData}>
                <Line type="monotone" dataKey="memFree" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" label="Memory []"/>
                <YAxis />
            </LineChart>
        </Layout>
    )
}

export default Statistics
