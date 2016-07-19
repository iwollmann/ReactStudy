"use strict";

var React = require('react');
var Table = require('../common/table');
var test = {
	"key": "Id",
	"columns": ["Id", "Name"],
	"rows": [{"Id":1, "Name": "Leitura 1"}, 
			{"Id":2, "Name": "Leitura 2"},
			{"Id":3, "Name":"Outra Leitura"}]
};

var CoursesList = React.createClass({
    render: function () {
        return(
            <div>
                <Table key="listTable" data={test}/>
            </div>
            )
    }
});

module.exports = CoursesList;