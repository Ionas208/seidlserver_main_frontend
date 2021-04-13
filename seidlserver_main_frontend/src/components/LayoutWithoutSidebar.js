import '../styles/Layout.css';
import '../global.css';
import Topbar from './Topbar';
import React from 'react';
import Footer from './Footer';

const LayoutWithoutSidebar = ({ servername, children }) => {
  return (
      <div className="container">
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

export default LayoutWithoutSidebar;