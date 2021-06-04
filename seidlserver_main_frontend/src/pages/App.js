import '../styles/App.css';
import '../global.css';

import {useState} from 'react'
import Gameservers from './Gameservers';
import Statistics from './Statistics';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Settings from './Settings';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/gameservers" exact render={() => (<Gameservers setOpen={setOpen} open={open}/>)} />
        <Route path="/settings" exact render={() => (<Settings setOpen={setOpen} open={open}/>)} />
        <Route path="/statistics" exact render={() => (<Statistics setOpen={setOpen} open={open}/>)} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact render={() => (<Gameservers setOpen={setOpen} open={open}/>)} />
      </Switch>
    </Router>
  );
}

export default App;
