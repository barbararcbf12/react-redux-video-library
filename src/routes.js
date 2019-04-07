import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MediaGalleryPage from './containers/MediaGalleryPage';
import App from './containers/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MediaGalleryPage} />
  </Route>
);

