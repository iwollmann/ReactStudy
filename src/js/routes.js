'use strict';

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var LecturePage = require('./components/lectures/lecturePage');

var Routes =(
    <Route name="app" path="/" component={require('./components/app')}>
        <IndexRoute component={require('./components/homePage')}/>
        <Route path="lectures" component={LecturePage}/>
        <Route name="add" path="addLecture" component={require('./components/lectures/manageLecturePage')}/>
        <Route name="courses" path="courses" component={require('./components/courses/coursePage')}/>
        <Route name="addCourse" path="course/add" component={require('./components/courses/manageCoursePage')}/>
    </Route>
)

module.exports = Routes;