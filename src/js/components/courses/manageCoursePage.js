"use strict";

var React = require('react');
var CancelButton = require('../common/cancelButton');
var Input = require('../common/textinput');
var NumberInput = require('../common/numberInput');
var DropDown = require('../common/dropdown');
var AuthorApi = require('../../api/authorApi');
var _ = require('lodash');

var ManageCoursePage = React.createClass({
    getInitialState:function () {
        return{value:'', authors:[]}
    },

    handleChange: function (event) {
        this.setState({
            value:event.target.value
        });
    },

    componentWillMount: function () {
        this.setState({authors: AuthorApi.getAll()});
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

                        <DropDown name="Author"
                            id="slAuthor"
                            options={_.map(this.state.authors,'name')} />

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