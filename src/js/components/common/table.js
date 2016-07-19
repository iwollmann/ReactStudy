"use strict";

var React = require('react');

var Table = React.createClass({
    propTypes:{
        data: React.PropTypes.shape({
            key: React.PropTypes.string.isRequired,
            columns : React.PropTypes.array.isRequired,
            rows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        })
    },

    render: function () {
        var createRows = function (data){
            var trs = [];
            for (var row in data.rows) {
                if (data.rows.hasOwnProperty(row)) {
                    trs.push(createRow(data.rows[row], data.key));
                }
            }

            return trs;
        };

        var createRow = function (row, key) {
            var tds =[];
            var columns = Object.keys(row);
            for (var i = 0; i < columns.length; i++) {
                tds.push(
                    <td key={row[columns[i]]}>{row[columns[i]]}</td>
                    );
            }

            return(
                <tr key={row[key]}>
                    {tds}
                </tr>
            )
        };

        var createHeader = function (column) {
            return(
                <th key={column}>{column}</th>
            )
        };

        return(
            <div>
                <table className="ui selectable striped celled table">
                    <thead>
                        <tr>
                            {this.props.data.columns.map(createHeader,this)}
                        </tr>
                    </thead>
                    <tbody>
                        {createRows(this.props.data)}
                    </tbody>
                </table>
            </div>);
    }
});

module.exports = Table;