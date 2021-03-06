import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import '../styles/Statistics.css'
import validate from '../utils/validate'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Statistics({open, setOpen}) {
    const [memData, setMemData] = useState(null)
    const [cpuData, setCpuData] = useState(null)

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` 
        }
    });

    var memTotal = 24
    const getMemStats = () =>{
        api.get('/stats/mem').then(res => {

            let furnished_data = []
            res.data.forEach((x)=>{
                let timestamp = x.timestamp
                let time = timestamp.split("T")[1]
                time = time.split(":")[0]+":"+time.split(":")[1]

                console.log(x)
                memTotal = x.memTotal

                let mem = x.memFree
                let data_point = {"time":time, "memUsed":Math.round((memTotal-mem)*100)/100}

                furnished_data.push(data_point)
            })

            setMemData(furnished_data)
       }).catch((err) => {
            console.log(err)
        })
    }

    const getCpuStats = () =>{
        api.get('/stats/cpu').then(res => {

            console.log(res.data)
            let furnished_data = []
            res.data.forEach((x)=>{
                let timestamp = x.timestamp
                let time = timestamp.split("T")[1]
                time = time.split(":")[0]+":"+time.split(":")[1]

                let usage = 100-x.load.idle
                let data_point = {"time":time, "usage":Math.round(usage*100)/100}

                furnished_data.push(data_point)
            })
            setCpuData(furnished_data)
       }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=>{
        getMemStats()
        getCpuStats()
    }, [])
    if (validate()) {
        return <Redirect to="/login" />
    }
    
    return (
        <Layout servername="SEIDLSERVER" open={open} setOpen={setOpen}>
            <h1 className="stat-h1">Statistics</h1>
            <div className="stat-container">
                <div>
                    <h2 className="stat-h2">RAM</h2>
                    <LineChart width={650} height={300} data={memData}>
                        <Line type="linear" dataKey="memUsed" stroke="#2B890D" dot={false} strokeWidth={2}/>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="time"/>
                        <YAxis unit="GB" type="number" domain={[0, memTotal]}/>
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                <h2 className="stat-h2">CPU</h2>
                    <LineChart width={650} height={300} data={cpuData}>
                        <Line type="linear" dataKey="usage" stroke="#31A5E1" dot={false} strokeWidth={2}/>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="time"/>
                        <YAxis unit="%" type="number" domain={[0, 100]}/>
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
            
        </Layout>
    )
}

export default Statistics
