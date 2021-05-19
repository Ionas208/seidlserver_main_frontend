import '../styles/Layout.css';
import '../global.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import React from 'react';
import Footer from './Footer';

const Layout = ({ servername, open, setOpen, children }) => {
  return (
      
      <div className="container">
          <Sidebar open={open} setOpen={setOpen} />
          <div className="actual-content">
              <Topbar servername={servername} />
              <div className="content-style children">
                    {children}
              </div>
              <Footer />
          </div>
      </div>
  );
}

export default Layout;