import '../styles/GameserverList.css'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPowerOff, faSyncAlt, faTrashAlt, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import jwt from 'jsonwebtoken'

function GameserverItem({ item, getServerList }) {
    const [upState, setUpState] = useState(false)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [emailInput, setEmailInput] = useState('')

    let user = jwt.decode(localStorage.getItem("jwt"))
    const isOwner = item.owner === user.sub ? true : false

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
            setUpState(res.data === 'ONLINE' || res.data === 'STARTED')
            console.log(res.data)
        }).catch((err) => {
            console.log(err.message)
            setUpState(false)
            setLoading(false)
        })
    }

    const getStateManual = () => {
        setLoading(true)
        api.get('gameserver/state',{
            params: {
              id: item.id
            }
          }).then(res => {
            setUpState(res.data === 'ONLINE' || res.data === 'STARTED')
            console.log(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err.message)
            setUpState(false)
            setLoading(false)
        })
    }
    
    const power = () => {
        getState()
        if(!loading){
            if(upState) {
                stopServer()    
            }
            else {
                startServer()
            }
        }
    }

    const startServer = () => {
        console.log("start")
        setLoading(true)
        api.post('gameserver/start?id=' + item.id).then(res => {
            setUpState(true)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
            setLoading(false)
        })
    } 

    const stopServer = () => {
        console.log("stop")
        setLoading(true)
        api.post('gameserver/stop?id=' + item.id).then(res => {
            setUpState(false)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setUpState(false)
            setLoading(false)
        })
    } 

    const removeServer = () => {
        if(isOwner){
            api.post('gameserver/remove?id=' + item.id
            ).then(res => {
                console.log(res)
                getServerList();
            }).catch((err) => {
                console.log(err)
            })
        }else{
            api.post('gameserver/unshare?serverid=' + item.id
            ).then(res => {
                console.log(res)
                getServerList();
            }).catch((err) => {
                console.log(err)
            })
        }
        
    }

    useEffect(() => {
        getState();
    }, [open])

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/gameserver/share?serverid='+item.id+'&email='+emailInput,).then(res => {
            setOpen(false)
            setEmailInput('')
            alert('successful')
        }).catch((err) => {
            console.error(err)
            if(err.response.status === 400){
                alert('Server is already shared with the user.')
            }else{
                alert('Sharing was not successful.')
            }
            
        })
    }

    return (
        <div className="gameserver-item-container gameserver-item-game">
            <div className="gameserver-item-header">
                <div className="gameserver-item-img-container">
                    <img className={`${loading ? "tinted" : ""}`} src={item.type.url} alt="" />
                    <div className={`${loading ? "loader" : ""} gameserver-item-loader`}></div>
                </div>
                
                <div style={{marginLeft: '20px'}}>
                    <h1 className="gameserver-item-h1">{item.servername}</h1>
                    <p>/home/{item.linuxuser}</p>
                </div>
            </div>
            <div className="gameserver-item-operator">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>{upState ? "ONLINE" : "OFFLINE"}</h2>
                        <FontAwesomeIcon icon={faCircle} className={`icon-status ${upState ? "status-up" : "status-down"}`} />
                    </div>

                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="bt-standard bt-gameserver-item" onClick={getStateManual}><FontAwesomeIcon icon={faSyncAlt} /></button>
                        <button className="bt-standard bt-gameserver-item" onClick={removeServer}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        <button className="bt-standard bt-gameserver-item" onClick={power}><FontAwesomeIcon icon={faPowerOff} /></button>
                    </div>
                </div>
            </div>

            <button className="bt-gameserver-share" style={isOwner ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => { setOpen(true) }}><FontAwesomeIcon icon={faShareAlt} className={`icon-share`}/></button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="modal-container">
                        <h1>Share Gameserver</h1>
                        <form onSubmit={handleSubmit}>
                            <p className="form-header">Email</p>
                            <input type="text" value={emailInput} onChange={e => setEmailInput(e.target.value)} /><br></br>
                            <button className="bt-standard"  onClick={handleSubmit}>Share</button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default GameserverItem
