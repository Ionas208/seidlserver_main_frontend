import '../styles/GameserverList.css'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPowerOff, faSyncAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

function GameserverItem({ item, getServerList }) {
        
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
              id: item.id
            }
          }).then(res => {
            setUpState(res.data === 'ONLINE')
            console.log(res.data)
        }).catch((err) => {
            console.log(err.message)
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
        api.post('gameserver/start?id=' + item.id).then(res => {
            setUpState(true)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
        })
    } 

    const stopServer = () => {
        console.log("stop")
        api.post('gameserver/stop?id=' + item.id).then(res => {
            setUpState(false)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
        })
    } 

    const removeServer = () => {
        api.post('gameserver/remove?id=' + item.id
          ).then(res => {
              console.log(res)
              getServerList();
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getState();
    }, [])

    return (
        <div className="gameserver-item-container gameserver-item-game">
            <div className="gameserver-item-header">
                <img src={item.type.url} alt="" />
                <div style={{marginLeft: '20px'}}>
                    <h1 className="gameserver-item-h1">{item.servername}</h1>
                    <p>{item.script}</p>
                </div>
            </div>
            <div className="gameserver-item-operator">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>{upState ? "ONLINE" : "OFFLINE"}</h2>
                        <FontAwesomeIcon icon={faCircle} className={`icon-status ${upState ? "status-up" : "status-down"}`} />
                    </div>

                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="bt-standard bt-gameserver-item" onClick={getState}><FontAwesomeIcon icon={faSyncAlt} /></button>
                        <button className="bt-standard bt-gameserver-item" onClick={removeServer}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        <button className="bt-standard bt-gameserver-item" onClick={power}><FontAwesomeIcon icon={faPowerOff} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameserverItem
