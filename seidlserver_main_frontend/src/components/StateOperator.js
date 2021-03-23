import "./StateOperator.css";
import "../global.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const api = axios.create({
    baseURL: 'http://10.0.0.20:8080/'
});

class StateOperator extends React.Component {

    state = {
        upState: ''
    }

    constructor(props) {
        super(props);
        api.get('/state').then(res => {
            console.log(res.data.state)
            this.setState({upState: res.data.state});
        })

    }



    render() {
        return (
            <>
                <div className="statusContainer">
                    <div>
                        <h1>Status: {this.state.upState}</h1>
                    </div>
                    <div className="icon-status">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className="align-right">
                        <button className="bt-standard">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </button>
                        <button className="bt-standard bt-green">
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
