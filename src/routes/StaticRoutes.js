/**
 * StaticRoutes.js
 * ===============
 * Routes that don't require API calls, async tasks etc., just pass through a simple page.
 * This is just so we don't have have little nearly-identical files cluttering the routes folder.
 *
 * Author: Ben Gundersen
 */

'use strict';

import _ from 'underscore';
import Promise from 'bluebird';
import React from 'react';

import HomePage from '../pages/Home.js';

module.exports = {

  showHomePage: function() {
    return new Promise(function(resolve, reject) {
      var component = React.createElement(HomePage);
      resolve(component);
    });
  }

};
