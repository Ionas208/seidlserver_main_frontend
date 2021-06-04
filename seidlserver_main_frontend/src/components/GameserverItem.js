import React from 'react'
import '../styles/GameserverList.css'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPowerOff, faShare, faShareAlt, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

function GameserverItem({ imageUrl, scriptname, id }) {
        
    const [upState, setUpState] = useState(false)

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    const getState = () => {
        api.get('gameserver/state',{
            params: {
              id: id
            }
          }).then(res => {
            setUpState(res.data === 'ONLINE')
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
        })
    }
    
    const power = () => {
        getState()
        if(upState) {
            stopServer()
        }
        else {
            startServer()
        }
    }

    const startServer = () => {
        console.log("start")
        api.post('gameserver/start',{
            params: {
              id: id
            }
          }).then(res => {
            setUpState(true)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
        })
    } 

    const stopServer = () => {
        console.log("stop")
        api.post('gameserver/stop',{
            params: {
              id: id
            }
          }).then(res => {
            setUpState(false)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
        })
    } 

    useEffect(() => {
        getState();
    }, [])

    return (
        <div className="gameserver-item-container">
            <div className="gameserver-item-header">
                <img src="https://images-eu.ssl-images-amazon.com/images/I/512dVKB22QL.png" />
                <h1 className="gameserver-item-h1">mcserver</h1>
            </div>
            <div className="gameserver-item-operator">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>ONLINE</h2>
                        <FontAwesomeIcon icon={faCircle} className={`icon-status ${upState ? "status-up" : "status-down"}`} />
                    </div>

                    <div>
                        <button className="bt-standard" onClick={getState}><FontAwesomeIcon icon={faSyncAlt} /></button>
                        <button className="bt-standard" onClick={power}><FontAwesomeIcon icon={faPowerOff} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameserverItem
