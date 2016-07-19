"use strict";

var React = require('react');
var CoursesList = require('./coursesList');

var CoursePage = React.createClass({
    render:function () {
        return(
            <div>
                <h1 className="ui header">Courses</h1>
                <div className="ui segment">
                    <CoursesList />
                </div>
            </div>
        );
    }
});

module.exports = CoursePage;