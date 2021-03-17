import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout servername="SEIDLSERVER">
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);