import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../styles/SidebarItem.css'

function SidebarItem(props) {

    return (
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
    )
}

export default SidebarItem
