"use strict";

var React = require('react');
var Input = require('../common/textinput');

var ManageLecturePage = React.createClass({
    getInitialState:function () {
        return{value:''}
    },
    handleChange: function (event) {
        this.setState({value:event.target.value});
    },

    render: function () {
        var formClass='ui form segment';
        if (this.props.error && this.props.error.lenght > 0){
            formClass += " " + 'error';
        }

        return(
        <div>
            <h1 className="ui header">Manage Lectures</h1>
            <form className={formClass}>
                <Input name="lectureName"
                    label="Lecture Name"
                    placeholder="Lecture Name"
                    value={this.props.value}
                    onChange={this.handleChange} />
                <input type="submit" value="Save" className="ui submit primary button" />
                <button className="ui button">Cancel</button>
            </form>
        </div>);
    }
});

module.exports = ManageLecturePage;