'use strict';

//Mock
var authors = require('../../../FakeData/authorData').authors;

var AuthorApi = {
    getAll: function () {
        return JSON.parse(JSON.stringify(authors));
    }
};

module.exports = AuthorApi;