import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Hotels} from './pages/Hotels';
import {NavBar} from './components/navbar/NavBar';
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={Hotels} />
        </Switch>
      </Router>
    </div>
  );
};
