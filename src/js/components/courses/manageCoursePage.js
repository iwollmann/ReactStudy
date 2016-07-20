"use strict";

var React = require('react');
var CancelButton = require('../common/cancelButton');

var ManageCoursePage = React.createClass({
    render: function () {

        return(
            <div>
                <h2 className="ui header">ManageCourse</h2>
                <CancelButton value='Cancel' return='/courses' />
            </div>
        )
    }
});

module.exports = ManageCoursePage;