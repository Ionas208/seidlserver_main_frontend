import "../styles/StateOperator.css";
import "../global.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}` 
    }
});

class StateOperator extends React.Component {

    state = {
        upState: ''
    }

    constructor(props) {
        super(props);
        this.refreshState();
    }

    refreshState() {
        api.get('/server/state').then(res => {
            console.log(res.data.state)
            this.setState({upState: res.data.state});
        }).catch((err) => {
            this.setState({upState: 'CONNECTION FAILED'});
        })
    }

    power() {
        if(this.state.upState === 'DOWN'){
            api.post('/server/start').then(res => {
                console.log('ifPower')
                console.log(res.data)
                this.setState({upState: res.data.state})
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            api.post('/server/stop').then(res => {
                console.log('elsePower')
                console.log(res.data)
                this.setState({upState: res.data.state})
            }).catch(err => {
                console.log(err)
            })
        }
    }

    restart() {
        if(this.state.upState === 'UP') {
            this.setState({upState: ''});
            api.post('/server/restart').then(res => {
                console.log(res.data)
                this.setState({upState: res.data.state})
            }).catch(err => {
                this.setState({upState: 'CONNECTION FAILED'})
            })
        }
    }

    render() {
        return (
            <>
                <div className="statusContainer">
                    <div className="status-status-container">
                    <h1>Status:{'\u00A0'}</h1><div className={`${this.state.upState === '' ? "loader" : ""}`}></div><h1>{this.state.upState}</h1>
                    </div>
                    <div className="icon-status">
                        <FontAwesomeIcon icon={faCircle} className={`icon-status ${this.state.upState === 'DOWN' ? "status-down" : this.state.upState === 'UP' ? "status-up" : this.state.upState === '' ? "hidden" : "status-no-connection"}`}/>
                    </div>
                    <div className="align-right">
                        <button className={`bt-standard ${this.state.upState === 'UP' || this.state.upState === '' ? "" : "bt-disabled"}`} onClick={() => this.restart()}>
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </button>
                        <button className={`bt-standard ${this.state.upState === 'DOWN' ? "bt-red" : this.state.upState === 'UP' || this.state.upState === '' ? "bt-green" : "bt-disabled"}`} onClick={() => this.power()}>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </button>
                    </div>
                </div>
                <hr />
            </>
        );
    }
}

export default StateOperator;
