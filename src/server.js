/**
 * server.js
 * =========
 * Entry point for server-side rendering.
 *
 * Author: Ben Gundersen
 */

'use strict';

import fs from 'fs';
import express from 'express';
import _ from 'underscore';
import React from 'react';

import routes from './router.js';

var server = express();
var port = process.env.PORT || 8080;

global.root = global;

server.use(express.static('public'));

var layout_html = fs.readFileSync('./index.html', { encoding: 'utf8' });

_.each(routes, function(r) {
  server.get(r.path, function(req, res) {
    r.route.call(null, )


  AppRoutes.homePage()
    .then(function(component) {
      var view_html = React.renderToString(component);
      var html = layout_html.replace('{{content}}', view_html);
      res.send(html);
    });
    // catch

});

  AppRoutes.mapPage()
    .then(function(component) {
      var view_html = React.renderToString(component);
      var html = layout_html.replace('{{content}}', view_html);
      res.send(html);
    });

});

console.log("Starting server on port %d", port);
server.listen(port);
