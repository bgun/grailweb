/**
 * client.js
 * =========
 * Entry point for browser rendering.
 *
 * Author: Ben Gundersen
 */

'use strict';

import page from 'page';
import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

import routes from './router.js';

window.root = window;
root._client = true;

console.log("Client loading");

page.push = function(url) {
  return history.pushState(null, null, url);
};
page('/', function(ctx, next) {
  AppRoutes.homePage()
    .then(function(component) {
    })
    .catch(function(error) {
      throw new Error(error);
    });
});
page('/map', function(ctx, next) {
  AppRoutes.homePage()
    .then(function(component) {
    })
    .catch(function(error) {
      throw new Error(error);
    });
});



import HomePage from './pages/Home.js';
var el = React.createElement(HomePage);
React.render(el, document.getElementById('main'));


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
  //webRouter.navigate(url, { trigger: true });
  // Handle the back (or forward) buttons here
  // Will NOT handle refresh, use onbeforeunload for this.
};
