/**
 * router.js
 * =========
 * Common routing between client and server.
 * All routes are imported here. Routes return promises for page-level
 * React components, which are then handled on the client by mounting the
 * component, and on the server by rendering static HTML.
 *
 * Author: Ben Gundersen
 */

'use strict';

import StaticRoutes     from './routes/StaticRoutes.js';
import CollectionRoutes from './routes/CollectionRoutes.js';

var routes = [
  { path: '/',                  route: StaticRoutes.showHomePage },
  { path: '/collection/:map_id',route: CollectionRoutes.showCollectionDetail }
];

module.exports = routes;