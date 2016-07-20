"use strict";

var React = require('react');

var NumberInput = React.createClass({
    propTypes:{
        name : React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        error: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.string
    },

    render:function () {
        return(
            <div className="field">
                <label>{this.props.label}</label>
                <input type="number"
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    ref={this.props.name}
                    onChange={this.props.onChange} />
                <div className="ui error message">
                    <p>{this.props.error}</p>
                </div>
            </div>
        );
    }
});

module.exports = NumberInput;