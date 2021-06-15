import "../styles/StateOperator.css";
import "../global.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import useInterval from '../utils/useInterval';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
});


function StateOperator() {
    const [upState, setUpstate] = useState('')
    const refreshState = () => {
        api.get('/server/state').then(res => {
            console.log("refreshing...")
            if(!(upState==='STARTING') && !(upState==='STOPPING') && !(upState==='RESTARTING')){
                setUpstate(res.data);
            }
        }).catch((err) => {
            console.log(err)
            setUpstate('CONNECTION FAILED');
        })
    }

    const power = () => {
        if (upState === 'DOWN') {
            setUpstate('STARTING')
            var timeout = setTimeout(() =>{
                setUpstate('')
                refreshState()
            }, 35000)

            api.post('/server/start').then(res => {
                console.log("starting...")
            }).catch(err => {
                clearTimeout(timeout)
                setUpstate('CONNECTION FAILED');
                console.log(err)
            })
        }
        else if (upState === 'UP'){
            setUpstate('STOPPING')
            var timeout = setTimeout(() =>{
                setUpstate('')
                refreshState()
            }, 10000)

            api.post('/server/stop').then(res => {
                console.log("stopping...")
            }).catch(err => {
                clearTimeout(timeout)
                setUpstate('CONNECTION FAILED');
                console.log(err)
            })
        }
    }

    const restart = () => {
        if (upState === 'UP') {
            setUpstate('RESTARTING')
            var timeout = setTimeout(() =>{
                setUpstate('')
                refreshState()
            }, 30000)
            api.post('/server/restart').then(res => {
                console.log("restarting...")
            }).catch(err => {
                clearTimeout(timeout)
                console.log(err)
                setUpstate('CONNECTION FAILED');
            })
        }
    }

    useEffect(() => {
        refreshState();
        refreshState();
        refreshState();
    }, [])

    useInterval(()=>{
        refreshState();
    }, 5000)

    return (
        <>
            <div className="status-container">
                <div className="status-status-container">
                    <h1>Status:{'\u00A0'}</h1><div className={`${upState === '' ? "loader" : ""}`}></div><h1>{upState}</h1>
                </div>
                <div className="icon-status">
                    <FontAwesomeIcon icon={faCircle} className={`icon-status ${upState === 'DOWN' ? "status-down" : upState === 'UP' ? "status-up" : upState === '' ? "hidden" : "status-no-connection"}`} />
                </div>
                <div className="align-right">
                    <button className={`bt-standard ${upState === 'UP' || upState === '' ? "" : "bt-disabled"}`} onClick={restart}>
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </button>
                    <button className={`bt-standard ${upState === 'DOWN' ? "bt-red" : upState === 'UP' || upState === '' ? "bt-green" : "bt-disabled"}`} onClick={power}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default StateOperator
