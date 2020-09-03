import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
 
 
class ProductsSearch extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return(<input type="text" name="search" placeholder="Search products" className="form-control" value={this.props.searchKey} onChange={(e) => this.props.handleSearch(e)} />);
	}
}

export default ProductsSearch;