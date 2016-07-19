var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var BrowserHistory = require('react-router/lib/browserHistory');
var routes = require('./routes');

ReactDOM.render(
    <Router history={BrowserHistory}>{routes}</Router>, document.getElementById('app')
    );