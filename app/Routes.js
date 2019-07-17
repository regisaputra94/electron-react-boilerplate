import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';

import Login from './containers/Login/index';
import Dashboard from './containers/Dashboard/index';
import Daftar from './containers/Daftar/index';
import EntryData from './containers/EntryData/index';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} component={Login} />
      <Route path={routes.DASHBOARD} component={Dashboard} />
      <Route path={routes.DAFTAR} component={Daftar} />
      <Route path={routes.ENTRYDATA} component={EntryData} />
    </Switch>
  </App>
);
