import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';
import App from './containers/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

