import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import 'typeface-roboto';
import 'normalize.css';

import Dashboard from './pages/Dashboard';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default App;
