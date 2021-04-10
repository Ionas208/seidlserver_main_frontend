import '../styles/Layout.css';
import '../global.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import React from 'react';

const Layout = ({ children }) => {
  return (
      
      <div className="container">
          <Sidebar/>
          <div className="actual-content">
              <Topbar servername="TrUmMeRsErVeR" />
              <div className="content-style">
                  {children}
              </div>
          </div>
      </div>
  );
}

export default Layout;