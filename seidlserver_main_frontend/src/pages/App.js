import '../styles/App.css';
import '../global.css';
import Layout from '../components/Layout';
import Overview from './Overview';
import Gameservers from './Gameservers';
import Setting from './Settings';
import Statistics from './Statistics';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/overview" exact component={Overview} /> 
        <Route path="/gameservers" exact component={Gameservers} />
        <Route path="/settings" exact component={Setting} />
        <Route path="/statistics" exact component={Statistics} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
