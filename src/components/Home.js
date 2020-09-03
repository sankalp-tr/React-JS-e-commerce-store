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
import ProductsGridView from './ProductsGridView.js';
import Banner from './Banner.js';

import Heading from './Heading.js';
import PageHeading from './PageHeading.js';
import Article from './Article.js';
import ContactForm from './ContactForm.js';
import TestingDb from './TestingDb.js';

class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			jsonData: [], 
			grossTotal: 0
			};
	}
	
	componentDidMount() {
		// Much detailed products list here -
		// https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json
		// https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/sap/ui/demokit/explored/products.json
		
		window.fetch('./data/products.json')
		.then(response => response.json()) 
		.then(data => this.setState({jsonData: data.ProductCollection}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE
	
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
		return (
			<div>
			<div className="container-fluid banner-container">
				<Banner/>
			</div>
			<div className="container">
				<div className="content">
					<form>
						
						{/*
						<div className="testingDb">
						<TestingDb/>
						</div>
						*/}
						
						
						<PageHeading title="Shop by Category" />
						<Article content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'/>
						<Heading title="Laptops" />
						<ProductsGridView totalGross={this.calculateGrossTotal.bind(this)} data={this.state.jsonData} category="Laptops" displayCount="4" />
						<Heading title="Flat Screen Monitors" />
						<ProductsGridView totalGross={this.calculateGrossTotal.bind(this)} data={this.state.jsonData} category="Flat Screen Monitors" displayCount="4" />
						<Heading title="Flat Screen TVs" />
						<ProductsGridView totalGross={this.calculateGrossTotal.bind(this)} data={this.state.jsonData} category="Flat Screen TVs" displayCount="4" />
						<Heading title="Desktop Computers" />
						<ProductsGridView totalGross={this.calculateGrossTotal.bind(this)} data={this.state.jsonData} category="Desktop Computers" displayCount="4" />
						<ContactForm title="Contact Us" />
					</form>
				</div>
			</div>
			</div>
		);
	}
}
 
export default Index;
