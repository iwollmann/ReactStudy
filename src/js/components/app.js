"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Header = require('./common/header');
var Routes = require('../routes');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
});

module.exports = App;