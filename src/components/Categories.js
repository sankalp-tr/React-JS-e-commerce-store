import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import history from '../history.js';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';

import PageHeading from './PageHeading.js';
import Heading from './Heading.js';
import Article from './Article.js';
import ProductsGridView from './ProductsGridView.js';
import ProductsTableView from './ProductsTableView.js';
import ProductsSearch from './ProductsSearch.js';
import ChooseDisplayWidget from './ChooseDisplayWidget.js';


class Categories extends React.Component {
	constructor() {
		super();
		this.state = {
			jsonData: [],
			searchKey: "",
			catalogView: "grid"
		}
	}
	
	componentDidMount() {		
		//	https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/sap/ui/demokit/explored/products.json
		
		window.fetch('./data/products.json')
		.then(response => response.json())
		.then(data => this.setState({jsonData: data.ProductCollection}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE
	}
	
	handleSearch(e) {
		this.setState({
			searchKey: e.target.value		
		});
	}
	
	handleView(e, type) {
		this.setState({
			catalogView: type
		});
	}
	
	// Sending this method to child component (which is having the parameters)
	calculateGrossTotal(stateQty, targetValue, i, items, limitIndex) {
		let tempQty = stateQty;
		tempQty[i] = Number(targetValue);
		var gross = 0;
		items.map(function(prod, c){
				var tq = tempQty[c] ? tempQty[c] : 0;
				gross += prod.Price * tq;
		});
		this.setState({grossTotal: gross});
	}
	
	render() {
		var productsView = this.state.catalogView == "list" 
		? <ProductsTableView data={this.state.jsonData} totalGross={this.calculateGrossTotal.bind(this)} category={this.props.match.params.id} searchFor={this.state.searchKey}/>
		: <ProductsGridView data={this.state.jsonData} totalGross={this.calculateGrossTotal.bind(this)} category={this.props.match.params.id} searchFor={this.state.searchKey}/>;
		
		return (<div>
		<div className="container">
		<div className="content">
		<PageHeading title={this.props.match.params.id} />
		<Article content={"Products under Category \"" + this.props.match.params.id + "\" -"} />
		<div className="row">
		<div className="col-sm-3"><ProductsSearch searchKey={this.state.searchKey} handleSearch={(e) => this.handleSearch(e)} /></div>
		<div className="col-sm-3"><ChooseDisplayWidget list={this.handleView.bind(this)} grid={this.handleView.bind(this)} /></div>
		</div>
			{productsView}
		</div>
		</div>
		</div>);
	}
}

export default Categories;