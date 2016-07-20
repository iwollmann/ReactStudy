"use strict";

var React = require('react');
var CoursesList = require('./coursesList');
var CourseApi = require('../../api/courseApi');

var CoursePage = React.createClass({
    getInitialState: function () {
        return{
            courses: []
        };
    },

    componentWillMount: function () {
        this.setState({courses: CourseApi.getAll() });
    },

    render:function () {
        return(
            <div>
                <h1 className="ui header">Courses</h1>
                <div className="ui segment">                    
                    <CoursesList courses={this.state.courses} />
                </div>
            </div>
        );
    }
});

module.exports = CoursePage;