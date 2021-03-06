"use require";

var React = require('react');
var BrowserHistory = require('react-router/lib/browserHistory');
var Router = require('react-router');
var Link = Router.Link;

var CancelButton = React.createClass({
    render: function () {
        return(
            <Link to={this.props.return} className="ui button">{this.props.value}</Link>
        )
    }
});

module.exports = CancelButton;