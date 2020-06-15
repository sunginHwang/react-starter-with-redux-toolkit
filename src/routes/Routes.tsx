import React from 'react';
import { Route, Switch } from 'react-router';
import loadable from '@loadable/component';

const todo = loadable(() => import('../pages/Todo'));

function Routes() {
  return (
    <Switch>
      <Route path='/' component={todo} exact />
    </Switch>
  );
}

export default Routes;
