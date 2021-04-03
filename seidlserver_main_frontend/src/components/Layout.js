import './Layout.css';
import '../global.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout = ({children}) => {
  return (
      
      <div className="container">
        
        <div className="actual-content-container">
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
            <div className="actual-content">
                <Topbar servername="SEIDLSERVER" />
                <div className="content-style">
                    {children}
                </div>
            </div>
        </div>
      </div>
  );
}

export default Layout;