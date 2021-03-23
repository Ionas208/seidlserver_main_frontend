import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './components/App';*/
import Layout from './components/Layout';
import StateOperator from './components/StateOperator';

ReactDOM.render(
    <Layout servername="SEIDLSERVER">
      {/*<App />*/}
      <StateOperator></StateOperator>
    </Layout>,
  document.getElementById('root')
);