import '../styles/Sidebar.css';
import '../global.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faChartPie, faServer, faColumns, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from './SidebarItem';


function Sidebar() {

  const [open, setOpen] = useState(false);

    return (
      <div className={`sidebar noselect ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button onClick={() => setOpen(!open)} className="bt-icon"><FontAwesomeIcon icon={open ? faTimes : faBars} /></button>
        <div className="container-sidebar-items">
          <SidebarItem icon={faColumns} text="Overview" open={open} link={'/overview'}/>
          <SidebarItem icon={faServer} text="Gameservers" open={open} link={'/gameservers'}/>
          <SidebarItem icon={faChartPie} text="Statistics" open={open} link={'/statistics'}/>
          <SidebarItem icon={faCog} text="Settings" open={open} link={'/settings'}/>
        </div>
      </div>
    );
}


export default Sidebar;
