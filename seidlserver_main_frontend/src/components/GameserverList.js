import React from 'react'
import GameserverItem from './GameserverItem'
import axios from 'axios'
import { useState, useEffect } from 'react';

import '../styles/GameserverList.css'
import GameserverAdd from './GameserverAdd';

function GameserverList() {

    const [serverList, setServerList] = useState([])

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    const getServerList = () => {
        api.get('gameserver/list').then(res => {
            setServerList(res.data)
        }).catch((err) => {
            console.log(err)
            setServerList([])
        })
    }


    useEffect(() => {
        getServerList()
    }, [])

    return (
        <div className="gameserver-list-container noselect">
            {serverList.map((item) =>
                <GameserverItem key={item.id} item={item} getServerList={getServerList} />
            )}
            <GameserverAdd getServerList={getServerList} />
        </div>
    )
}

export default GameserverList
