'use strict';

import _ from 'underscore';

class View {
  constructor(options) {
    //this.model = options.model;
    console.log("home constructor");
    this.template = '<h1><a href="/test"><%= title %></a></h1>';
    this.backend = options.backend;
  }

  render() {
    console.log("home render");
    if(!this.backend) {
      console.log("client side",window);
    }
    return _.template(this.template)({ title: "Home" });
  }
}

module.exports = View;
