import '../styles/Sidebar.css';
import '../global.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faChartPie, faServer, faColumns, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SidebarItem from './SidebarItem';


class Sidebar extends React.Component {
  state = {
    open: false
  }

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className={`sidebar ${this.state.open === true ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button onClick={() => this.setState({open: !this.state.open})} className="bt-icon"><FontAwesomeIcon icon={this.state.open ? faTimes : faBars} /></button>
        <div className="container-sidebar-items">
          <SidebarItem icon={faColumns} text="Overview" open={this.state.open}/>
          <SidebarItem icon={faServer} text="Overview" open={this.state.open}/>
          <SidebarItem icon={faChartPie} text="Overview" open={this.state.open}/>
          <SidebarItem icon={faCog} text="Overview" open={this.state.open}/>
          <SidebarItem icon={faColumns} text="Overview" open={this.state.open}/>
        </div>
      </div>
    );
  }

}


export default Sidebar;
