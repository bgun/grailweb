'use strict';

import page from 'page';
import AppRoutes from './routes/App.js';
import $ from 'jquery';

page('/test', function(ctx, next) {
  AppRoutes.homePage(false)
    .then(function(html) {
      document.body.innerHTML = html;
    })
    .catch(function(error) {
      throw new Error(error);
    });
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();

  var href = $(e.currentTarget).attr('href')
  console.log("original",href);

  if(!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
    var url = href.replace(/^\//,'') || '/';
    console.log("new",url);
    //webRouter.history.push(url);
    //webRouter.navigate(url, { trigger: true });
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
