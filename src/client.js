/**
 * client.js
 * =========
 * Entry point for browser rendering.
 *
 * Author: Ben Gundersen
 */

'use strict';

import page  from 'page';
import React from 'react';
import $     from 'jquery';
import _     from 'underscore';

import routes from './router.js';

window.root = window;
root._client = true;

console.log("Client loading");

page.push = function(url) {
  return history.pushState(null, null, url);
};

_.each(routes, function(r) {
  console.log("Added route: %s", r.path)
  page(r.path, function(req, res) {
    r.route.call(null)
      .then(function(component) {
        // Mount the component to #main
        var el = React.createElement(component);
        React.render(el, document.getElementById('main'));
      })
  });
});




$(function() {

  console.log("jQuery reporting for duty")
  // Someday we may not need jQuery at all, since we're using superagent
  // for unified http/ajax calls and Bluebird to abstract those calls into
  // Promises.

  $(document).on("click", "a[href^='/']", function(e) {
    e.preventDefault();

    var href = $(e.currentTarget).attr('href')
    console.log("original",href);

    if(!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      var url = href.replace(/^\//,'') || '/';
      console.log("new",url);
      history.pushState(null,null,url);
      page.push(url);
      return false;
    }
  });
  window.onpopstate = function(e) {
    e.preventDefault();
    console.log(webRouter.history.pop(), e);
    var url = webRouter.history[webRouter.history.length-1];
    console.warn("onpopstate url: ", url);
    // page(url);
    // Handle the back (or forward) buttons here
    // Will NOT handle refresh, use onbeforeunload for this.
  };
});
