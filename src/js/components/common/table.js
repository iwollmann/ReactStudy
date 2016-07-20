"use strict";

var React = require('react');

var Table = React.createClass({
    propTypes:{
        keyField: React.PropTypes.string.isRequired,        
        source: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },

    render: function () {
        var createRows = function (source, key){
            var trs = [];
            for (var row in source) {
                if (source.hasOwnProperty(row)) {
                    trs.push(createRow(source[row], key));
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
                <tr key={row[key.toLowerCase()]}>
                    {tds}
                </tr>
            )
        };

        var createColumns = function (source) {
            if (source.length == 0)
                return;

            var ths =[];
            var columns = source[0];
            var columnKeys = Object.keys(columns);
            for (var i = 0; i < columnKeys.length; i++) {
                ths.push(
                    <th key={columnKeys[i]}>{columnKeys[i]}</th>
                    );
            }

            return(
                ths
            )
        };

        return(
            <div>
                <table className="ui selectable striped celled table">
                    <thead>
                        <tr>
                            {createColumns(this.props.source)}
                        </tr>
                    </thead>
                    <tbody>
                        {createRows(this.props.source, this.props.keyField)}
                    </tbody>
                </table>
            </div>);
    }
});

module.exports = Table;