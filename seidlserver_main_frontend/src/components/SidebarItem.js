import './SidebarItem.css';
import '../global.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faChartPie, faServer, faColumns } from "@fortawesome/free-solid-svg-icons";

function SidebarItem(props) {
  return (
    <nav className="sidebar noselect">
        <div className="sidbar-item-container">
            <div className="sidebar-item selected"><FontAwesomeIcon icon={faColumns} /><span className="sidebar-text">Overview</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faServer} /><span className="sidebar-text">Gameservers</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faChartPie} /><span className="sidebar-text">Statistics</span></div>
            <div className="sidebar-item"><FontAwesomeIcon icon={faCog} /><span className="sidebar-text">Settings</span></div>
        </div>
    </nav>
  );
}

export default Sidebar;
