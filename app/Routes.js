import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';

import Login from './containers/Login/index';
import Dashboard from './containers/Dashboard/index';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} component={Login} />
      <Route path={routes.DASHBOARD} component={Dashboard} />
    </Switch>
  </App>
);
