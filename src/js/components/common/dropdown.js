"use require";

var React = require('react');

var DropDown = React.createClass({
    propTypes:{
        id: React.PropTypes.string.isRequired,        
        name: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired
    },

    render: function () {
        var createOption = function (option) {
            return(
                <option value={option}>{option}</option>
            )
        };

        return(
            <div className="field">
                <label>{this.props.name}</label>
                <select name={this.props.name} className="ui dropdown" id={this.props.id}>
                    <option value="" default selected>{this.props.name}</option>
                    {this.props.options.map(createOption, this)}
                </select>
            </div>
        )
    }
});

module.exports = DropDown;