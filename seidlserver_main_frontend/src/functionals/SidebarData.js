import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faChartPie, faServer, faColumns } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        text: 'Overview',
        path: '/overview',
        icon: <FontAwesomeIcon icon={faColumns} />,
        cName: 'sidebar-item'
    },
    {
        text: 'Gameservers',
        path: '/gameservers',
        icon: <FontAwesomeIcon icon={faServer} />,
        cName: 'sidebar-item'
    },
    {
        text: 'Statistics',
        path: '/statistics',
        icon: <FontAwesomeIcon icon={faChartPie} />,
        cName: 'sidebar-item'
    },
    {
        text: 'Settings',
        path: '/settings',
        icon: <FontAwesomeIcon icon={faCog} />,
        cName: 'sidebar-item'
    }
]