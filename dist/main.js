var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/home');
var LecturesList = require('./components/lectures');
// var css = require("css/bundle.css");

ReactDOM.render(<Home/>, document.getElementById('dhead'));
ReactDOM.render(<LecturesList />, document.getElementById('listLectures'));