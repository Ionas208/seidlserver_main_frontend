import axios from 'axios'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import { useState, useEffect } from 'react'
import GameserverAddContainer from './GameserverAddContainer'

function GameserverAdd({ getServerList }) {

    const [serverTypes, setServerTypes] = useState([])
    const [open, setOpen] = useState(false)

    const [scriptInput, setScriptInput] = useState('')
    const [servernameInput, setServernameInput] = useState('')
    const [servertypeInput, setServertypeInput] = useState('')


    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    const getTypes = () => {
        api.get('/gameserver/types').then(res => {
            setServerTypes(res.data)
            // console.log(serverTypes)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getTypes()
    }, [])

    const handleScriptInput = (e) => {
        let reg = /[a-zA-Z0-9]+/;
        let temp = reg.exec(e.target.value)
        if(temp === null) {
            temp = ['']
        }
        setScriptInput(temp.join(''))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        api.post('/gameserver/add',{
            "linuxuser": scriptInput,
            "servername": servernameInput,
            "type": servertypeInput
        }).then(res => {
            getServerList()
            setOpen(false)
        }).catch((err) => {
            console.error(err)
            alert('scriptname must be unique')
        })
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="modal-add-server-container">
                                {/* {serverTypes.map((item, i) => {
                                    <GameserverAddContainer key={i} name={item.name} />
                                })} */}

                                <p className="form-header">Type</p>
                                <select value={servertypeInput} onChange={e => setServertypeInput(e.target.value)}>
                                    <option>Ark</option>
                                    <option>Minecraft</option>
                                    <option>TS3</option>
                                </select>
                                <p className="form-header">Linuxuser</p>
                                <input type="text" value={scriptInput} onChange={e => handleScriptInput(e)} />
                                <p className="form-header">Servername</p>
                                <input type="text" value={servernameInput} onChange={e => setServernameInput(e.target.value)} />
                                <button className="bt-standard" style={{ marginLeft: 'auto' }} onClick={handleSubmit}>Add</button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default GameserverAdd
