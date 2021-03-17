import './Topbar.css';
import '../global.css';

function Topbar(props) {
  return (
    <div className="topbar">
        <h1 className="servername noselect">{props.servername}</h1>
    </div>
  );
}

export default Topbar;
