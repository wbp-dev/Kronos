import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'normalize.css';

import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
