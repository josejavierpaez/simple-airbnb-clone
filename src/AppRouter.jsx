import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Hotels} from './pages/Hotels';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={Hotels} />
        </Switch>
      </Router>
    </div>
  );
};
