'use strict';

//Mock
var lectures = require('../../../lectureData').lectures;

var LectureApi = {
    getAll: function () {
        return JSON.parse(JSON.stringify(lectures));
    }
};

module.exports = LectureApi