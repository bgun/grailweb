'use strict';

import _ from 'underscore';
import Promise from 'bluebird';
import HomePage from '../pages/Home.js';

module.exports = {

  homePage: function(backend) {
    console.log("Home page route");
    return new Promise(function(resolve, reject) {
      var str = _.map([1,2,3], function(i) {
        return i*2;
      });
      var view = new HomePage({ backend: backend });
      resolve(
        "<html>"+
        "<body>"+
        view.render()+
        "<script src='/js/client-bundle.js'></script>"+
        "</body>"+
        "</html>"
      );
    });
  },

  aboutPage: function() {
  }

};
