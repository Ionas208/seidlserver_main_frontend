import './Sidebar.css';
import '../global.css';

function Sidebar() {
  return (
    <nav className="sidebar noselect">
        <div className="sidbar-item-container">
            <div className="sidebar-item selected">Overview</div>
            <div className="sidebar-item">Analytics</div>
            <div className="sidebar-item">Settings</div>
        </div>
    </nav>
  );
}

export default Sidebar;
