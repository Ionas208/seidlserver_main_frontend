import '../styles/Layout.css';
import '../global.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
      
      <div className="container">
          <Sidebar/>
          <div className="actual-content">
              <Topbar servername="TrUmMeRsErVeR" />
              <div className="content-style children">
                    {children}
              </div>
              <Footer />
          </div>
      </div>
  );
}

export default Layout;