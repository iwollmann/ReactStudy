'use strict';

//Mock
var courses = require('../../../courseData').courses;

var CourseApi = {
    getAll: function () {
        return JSON.parse(JSON.stringify(courses));
    }
};

module.exports = CourseApi