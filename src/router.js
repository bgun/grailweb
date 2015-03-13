'use strict';

import StaticRoutes     from './routes/StaticRoutes.js';
import CollectionRoutes from './routes/CollectionRoutes.js';

var routes = [
  { path: '/',                  route: StaticRoutes.showHomePage },
  { path: '/collection/:map_id',route: CollectionRoutes.showCollectionDetail }
];

module.exports = routes;
