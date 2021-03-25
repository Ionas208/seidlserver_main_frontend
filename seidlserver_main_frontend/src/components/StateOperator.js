import "./StateOperator.css";
import "../global.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const api = axios.create({
    baseURL: 'http://10.151.66.9:8080/'
});

class StateOperator extends React.Component {

    state = {
        upState: 'connecting...'
    }

    constructor(props) {
        super(props);
        this.refreshState();
    }

    refreshState() {
        api.get('/state').then(res => {
            console.log(res.data.state)
            this.setState({upState: res.data.state});
        }).catch((err) => {
            this.setState({upState: 'NO CONNECTION'});
        })
    }

    power() {
        if(this.state.upState === 'DOWN'){
            api.post('/start').then(res => {
                console.log('ifPower')
                console.log(res.data)
                this.setState({upState: res.data.state})
            })
        }
        else {
            api.post('/stop').then(res => {
                console.log('elsePower')
                console.log(res.data)
                this.setState({upState: res.data.state})
            })
        }
    }

    render() {
        return (
            <>
                <div className="statusContainer">
                    <div>
                        <h1>Status: {this.state.upState}</h1>
                    </div>
                    <div className="icon-status">
                        <FontAwesomeIcon icon={faCircle} className={`icon-status ${this.state.upState === 'DOWN' ? "status-down" : this.state.upState === 'UP' ? "status-up" : "status-no-connection"}`}/>
                    </div>
                    <div className="align-right">
                        <button className="bt-standard" onClick={() => this.refreshState()}>
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </button>
                        <button className={`bt-standard ${this.state.upState === 'DOWN' ? "bt-red" : this.state.upState === 'UP' ? "bt-green" : ""}`} onClick={() => this.power()}>
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