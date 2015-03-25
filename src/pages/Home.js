'use strict';

import React from 'react';
import _ from 'underscore';
import $ from 'jquery';

module.exports = React.createClass({

  componentDidMount: function() {
    console.log("Home mounted!");
  },

  render: function() {

    return (
      <div id="home">
        <h1>Title 7</h1>
        <ul>
          <li><a href="/"   >Home</a></li>
          <li><a href="/map">Page</a></li>
        </ul>
      </div>
    );

  }

});