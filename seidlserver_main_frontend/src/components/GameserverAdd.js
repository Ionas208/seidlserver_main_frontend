import axios from 'axios'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import { useState, useEffect } from 'react'
import GameserverAddContainer from './GameserverAddContainer'

function GameserverAdd({ getServerList }) {

    const [serverTypes, setServerTypes] = useState([])

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    const submitServer = () => {
        api.post('/gameserver/add', {
            "script": "/mcserver",
            "servername": "asd",
            "type": "Minecraft"
        }).then(res => {
            getServerList()
        }).catch((err) => {
            console.error(err)
            alert('something went wrong')
        })
    }

    const getTypes = () => {
        api.get('/gameserver/types').then(res => {
            console.log('dhjksfkadflakjsdalkhfd')
            setServerTypes(res.data)
            console.log(res.data)
            // console.log(serverTypes)
        }).catch(err => {
            console.log(err)
        })
    }


    // Modal stuff

    const [open, setOpen] = useState(false)


    useEffect(() => {
        getTypes()
    }, [])

    console.log(serverTypes)

    return (
        <div className="gameserver-item-container gameserver-item-add">
            <button className="bt-add-server" onClick={() => { setOpen(true) }}>+</button>
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
                        <h1>Add server</h1>
                        <form>
                            <div className="modal-add-server-container">
                                {/* {serverTypes.map((item, i) => {
                                    <GameserverAddContainer key={i} name={item.name} />
                                })} */}
                                
                                <p className="form-header">Type</p>
                                <select>
                                    <option>Ark</option>
                                    <option>Minecraft</option>
                                </select>
                                <p className="form-header">Script</p>
                                <input type="text" />
                                <p className="form-header">Servername</p>
                                <input type="text" />
                                <button className="bt-standard" style={{ marginLeft: 'auto' }}>Add</button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default GameserverAdd
