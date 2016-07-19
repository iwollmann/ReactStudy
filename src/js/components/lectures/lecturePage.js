'use strict';

var React = require('react');
var Router = require('react-router');
var LectureApi = require('../../api/lectureApi');
var LectureList = require('./lectureList');
var Link = Router.Link;

var LecturePage = React.createClass({
    getInitialState: function () {
        return{
            lectures: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()){
            this.setState({lectures: LectureApi.getAll()});
        }
    },

    render:function () {
        return(
            <div>
                <div className="ui header">
                    <h1>Lectures</h1>
                </div>
                <div className="ui segment">
                    <div className="pabel-header">
                        <Link to="addLecture" className="ui button">Add</Link>
                    </div>
                    <div className="ui segment">
                        <LectureList lectures={this.state.lectures} />
                    </div>
                </div>
            </div>);
    }
});

module.exports = LecturePage;