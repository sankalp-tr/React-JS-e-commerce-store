import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
 
 
class CategoryDropdown extends React.Component {
	constructor(props){
		super(props);
	}
	 
	render() {
		var list = [];
		let options = this.props.data.map(function(item, i) {
						list[i] = (list.includes(item.Category) == false) ? item.Category: false;
						if(list[i]) {
							return (
								<option key={i} value={item.Category}>{item.Category}</option>
							);
						}
					});
		return(
		<select style={{float: 'right'}} className="form-control" name="searchCategory" onChange={(e) => this.props.handleCategoryChange(e)}>
			<option></option>
			{options}
		</select>);
	}
}

export default CategoryDropdown;