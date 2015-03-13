'use strict';

import React from 'react';
import _ from 'underscore';
import $ from 'jquery';

module.exports = React.createClass({

  componentDidMount: function() {
    console.log("Collection Details mounted!");
  },

  render: function() {

    return (
      <div id="collection-detail">
        <h1>{this.props.name}</h1>
        <ul>
          <li><a href="/"   >Home</a></li>
          <li><a href="/map">Page</a></li>
        </ul>
      </div>
    );

  }

});
