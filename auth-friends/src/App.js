import React from 'react';
import './App.css';
import { Router, Link } from 'react-router-dom';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
