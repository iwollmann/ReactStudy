"use strict";

var React = require('react');
var CancelButton = require('../common/cancelButton');
var Input = require('../common/textinput');
var NumberInput = require('../common/numberInput');

var ManageCoursePage = React.createClass({
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
        };
        
        return(
            <div>
                <h2 className="ui header">ManageCourse</h2>
                <div className="ui segment">
                    <form className={formClass}>
                        <Input name="Title"
                            label="Title"
                            placeholder="Title"
                            value={this.props.value}
                            onChange={this.handleChange} />

                        <Input name="Author"
                            label="Author"
                            placeholder="Author Name"
                            value={this.props.value}
                            onChange={this.handleChange} />

                        <Input name="Category"
                            label="Category"
                            placeholder="Category Name"
                            value={this.props.value}
                            onChange={this.handleChange} />
                        
                        <NumberInput name="Length"
                            label="Length"
                            placeholder="Length"
                            value={this.props.value}
                            onChange={this.handleChange} />

                        <input type="submit" value="Save" className="ui submit primary button" />
                        <CancelButton value='Cancel' return='/courses' />
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = ManageCoursePage;