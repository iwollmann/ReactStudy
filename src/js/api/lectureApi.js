'use strict';

//Mock
var lectures = require('../../../FakeData/lectureData').lectures;

var LectureApi = {
    getAll: function () {
        return JSON.parse(JSON.stringify(lectures));
    }
};

module.exports = LectureApi