import '../styles/App.css';
import '../global.css';
import Layout from './Layout';
import Overview from '../pages/Overview';
import Gameservers from '../pages/Gameservers';
import Setting from '../pages/Settings';
import Statistics from '../pages/Statistics';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Topbar from './Topbar';

function App() {
  return (
    <Router>
      <Switch>
        <Layout servername="SEIDLSERVER">
          <Route path="/overview" exact component={Overview} />
          <Route path="/gameservers" exact component={Gameservers} />
          <Route path="/settings" exact component={Setting} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
