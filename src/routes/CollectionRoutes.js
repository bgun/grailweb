'use strict';

import _ from 'underscore';
import Promise from 'bluebird';
import React from 'react';

import CollectionDetailPage from '../pages/CollectionDetail.js';

module.exports = {

  showCollectionDetailPage: function() {
    return new Promise(function(resolve, reject) {
      var component = React.createElement(CollectionDetailPage);
      resolve(component);
    });
  }

};
