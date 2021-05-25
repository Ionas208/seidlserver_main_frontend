import "../styles/StateOperator.css";
import "../global.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';

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
            setUpstate(res.data);
        }).catch((err) => {
            setUpstate('CONNECTION FAILED');
        })
    }

    const power = () => {
        if (upState === 'DOWN') {
            api.post('/server/start').then(res => {
                refreshState()
            }).catch(err => {
                setUpstate('CONNECTION FAILED');
            })
        }
        else {
            api.post('/server/stop').then(res => {
                console.log('elsePower')
                console.log(res.data)
                setUpstate(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const restart = () => {
        if (upState === 'UP') {
            setUpstate('');
            api.post('/server/restart').then(res => {
                console.log(res.data)
                setUpstate(res.data)
            }).catch(err => {
                setUpstate('CONNECTION FAILED')
            })
        }
    }

    useEffect(() => {
        console.log('bladi wörks')
        refreshState();
        setInterval(() => {
            console.log('bladi wörks')
            refreshState();
        }, 15000)
    }, [])

    return (
        <>
            <div className="statusContainer">
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
