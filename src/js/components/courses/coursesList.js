"use strict";

var React = require('react');
var Table = require('../common/table');
var Router = require('react-router');
var Link = Router.Link;

var test = {
	"key": "Id",
	"source": [{"Id":1, "Name": "Leitura 1"}, 
			{"Id":2, "Name": "Leitura 2"},
			{"Id":3, "Name":"Outra Leitura"}]
};

var CoursesList = React.createClass({
    render: function () {
        return(
            <div>
                <div className="ui header">
                        <Link to="course/add" className="ui button">Add</Link>
                    </div>
                    <div className="ui divider"></div>
                <Table keyField="Id" source={this.props.courses}/>
            </div>
            )
    }
});

module.exports = CoursesList;