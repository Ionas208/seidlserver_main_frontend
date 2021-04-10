import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/SidebarItem.css'
import { Link } from 'react-router-dom';

function SidebarItem(props) {

    return (
        <Link to={props.link}>
            <div className="sidebar-item">
                <div className="sidebar-icon-container">
                    <button className="bt-icon">
                        <FontAwesomeIcon icon={props.icon} className="icon"/>
                    </button>
                </div>
                <div className={`sidebar-text ${props.open ? "" : "text-hidden"}`}>
                    <span>{props.text}</span>
                </div>
            </div>
        </Link>
    )
}

export default SidebarItem
