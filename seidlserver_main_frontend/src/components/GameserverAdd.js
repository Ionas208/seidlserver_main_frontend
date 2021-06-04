import axios from 'axios'


function GameserverAdd({ getServerList }) {
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

    return (
        <div className="gameserver-item-container gameserver-item-add">
            <button className="bt-add-server" onClick={submitServer}>+</button>
        </div>
    )
}

export default GameserverAdd
