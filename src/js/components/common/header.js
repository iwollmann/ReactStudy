"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        return(
            <div className="ui fixed menu">
                <div className="ui container">
                    <a href="/" className="header item">Home</a>
                    <a href="/lectures" className="header item">Lectures</a>
                    <a href="/courses" className="header item">Courses</a>
                </div>
            </div>
        );
    }
});

module.exports = Header;