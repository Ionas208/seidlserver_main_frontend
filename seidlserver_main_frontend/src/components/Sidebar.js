import './Sidebar.css';
import '../global.css';
import {SidebarData} from '../functionals/SidebarData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

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

export default Sidebar;
