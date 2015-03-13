'use strict';

import express from 'express';
import _ from 'underscore';

import AppRoutes from './routes/App.js';

var server = express();
var port = process.env.PORT || 8080;

server.use(express.static('public'));

server.get('/', function(req, res) {
  AppRoutes.homePage(true)
    .then(function(html) {
      res.send(html);
    })
    .catch(function(error) {
      throw new Error(error);
    });
});

console.log("Starting server on port %d", port);
server.listen(port);
