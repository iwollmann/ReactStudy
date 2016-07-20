'use strict';

//Mock
var courses = require('../../../FakeData/courseData').courses;

var CourseApi = {
    getAll: function () {
        return JSON.parse(JSON.stringify(courses));
    }
};

module.exports = CourseApi