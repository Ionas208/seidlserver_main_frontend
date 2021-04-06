import '../styles/Sidebar.css';
import '../global.css';
import {SidebarData} from '../functionals/SidebarData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function backupSidebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="sidebar noselect">
        <div className="sidbar-item-container">
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.path}>
                  <div className={item.cName}>
                    {item.icon}
                    <span className="sidebar-text">{item.text}</span>
                  </div>
                </Link>
              </div>
            )
          })}
{/*         <div className="sidebar-item selected"><FontAwesomeIcon icon={faColumns} /><span className="sidebar-text">Overview</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faServer} /><span className="sidebar-text">Gameservers</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faChartPie} /><span className="sidebar-text">Statistics</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faCog} /><span className="sidebar-text">Settings</span></div>                  */}
        </div>
    </nav>
  );
}

export default backupSidebar;

// /* this is code that worked when commenting it out
      // <nav className="sidebar noselect">
      //     <div className="sidbar-item-container">
      //       {SidebarData.map((item, index) => {
      //         return (
      //           <div key={index}>
      //             <Link to={item.path}>
      //               <div className={item.cName}>
      //                 {item.icon}
      //                 <span className="sidebar-text">{item.text}</span>
      //               </div>
      //             </Link>
      //           </div>
      //         )
      //       })}
      //     </div>
      // </nav>
      // */
      //    <SideNav
      //     onSelect={(selected) => {
      //         console.log('Hello')
      //     }}
      //     >
      //     <SideNav.Toggle />
      //     <SideNav.Nav defaultSelected="overview">
      //         <NavItem eventKey="overview">
      //             <NavIcon>
      //               <FontAwesomeIcon icon={faColumns} />
      //             </NavIcon>
      //             <NavText>
      //                 Overview
      //             </NavText>
      //         </NavItem>
      //         <NavItem eventKey="gameservers">
      //             <NavIcon>
      //               <FontAwesomeIcon icon={faServer} />
      //             </NavIcon>
      //             <NavText>
      //                 Gameservers
      //             </NavText>
      //         </NavItem>
      //         <NavItem eventKey="statistics">
      //             <NavIcon>
      //               <FontAwesomeIcon icon={faChartPie} />
      //             </NavIcon>
      //             <NavText>
      //                 Statistics
      //             </NavText>
      //         </NavItem>
      //         <NavItem eventKey="settings">
      //             <NavIcon>
      //               <FontAwesomeIcon icon={faCog} />
      //             </NavIcon>
      //             <NavText>
      //                 Settings
      //             </NavText>
      //         </NavItem>
      //     </SideNav.Nav>
      // </SideNav> 