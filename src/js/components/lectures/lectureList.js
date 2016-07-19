'use strict';

var React = require('react');

var LectureList = React.createClass({
    render:function () {
        var createLecturesRow = function (lecture) {
            return(
                <tr key={lecture.id}>
                    <td>{lecture.id}</td>
                    <td>{lecture.name}</td>
                </tr>
            )
        };

        return(
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.lectures.map(createLecturesRow,this)}
                    </tbody>
                </table>
            </div>);
    }
});

module.exports = LectureList;