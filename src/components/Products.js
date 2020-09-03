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
import ProductsTableView from './ProductsTableView.js';
import ProductsGridView from './ProductsGridView.js';
import CategoryDropdown from './CategoriesDropDown.js';
import ProductsSearch from './ProductsSearch.js';
import ChooseDisplayWidget from './ChooseDisplayWidget.js';
import Sidebar from './Sidebar.js';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonData: [],
			grossTotal: 0,
			searchKey: "",
			catalogView: "grid",
			selectedCategory: "",
			selectedFilter: [],
			hidePane: false,
			showPane: true
		};
		
	}
	componentDidMount() {
		// Much detailed products list here -
		// https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json

		window.fetch('./data/products.json')
		.then(response => response.json())
		.then(data => this.setState({jsonData: data.ProductCollection}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE

	}

	handleValueChange(e) {
		this.setState({
			selectedCategory: e.target.value
		});
	}

	handleCheckboxChange(e) {
		if(e.target.checked === true) {
			console.log(this.state.selectedFilter)
			this.setState({
				selectedFilter: [...this.state.selectedFilter, e.target.value]		// spread syntax in React
			});
			console.log(this.state.selectedFilter)
		}
		else {
			let array = [...this.state.selectedFilter];
			if (array.indexOf(e.target.value) !== -1) {
				array.splice(array.indexOf(e.target.value), 1);
				this.setState({
					selectedFilter: array
				});
				
			}
		}
	}

	handleView = (e, type) => {
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

	handleSearch(e) {
		this.setState({
			searchKey: e.target.value
		});
	}

	handlePane(e) {
		this.setState({
			hidePane : !this.state.hidePane,
			showPane: !this.state.showPane
		})
	}

  ProductListing() {
		var productsView = this.state.catalogView == "list"
		? <ProductsTableView data={this.state.jsonData} totalGross={this.calculateGrossTotal.bind(this)} category={this.state.selectedCategory} searchFor={this.state.searchKey} />
		: <ProductsGridView data={this.state.jsonData} totalGross={this.calculateGrossTotal.bind(this)} category={this.state.selectedCategory} filterList={this.state.selectedFilter} searchFor={this.state.searchKey} />;

    return (<div className="content">
			<form>
				<div className="row">
					<div className="col-sm-3">
						<ProductsSearch handleSearch={this.handleSearch.bind(this)} searchFor={this.state.searchKey} />
					</div>
					<div className="col-sm-3">
						<CategoryDropdown data={this.state.jsonData} handleCategoryChange={this.handleValueChange.bind(this)} />
					</div>
					<div className="col-sm-3">
						<ChooseDisplayWidget list={this.handleView} grid={this.handleView} />
					</div>
				</div>
				<div className="row table-responsive">
				{productsView}
				</div>
				<div id="showHidePane">
					{
						!this.state.showPane
						? <button type="button" className="btn btn-danger hidePane" id="hidePane" onClick={this.handlePane.bind(this)}><span><i className="fa fa-arrow-up"></i></span></button>
						: <button type="button" className="btn btn-danger hidePane" id="hidePane" onClick={this.handlePane.bind(this)}><span><i className="fa fa-arrow-down"></i></span></button>
					}
					{
						this.state.hidePane
						? ""
						: <div className="row purchase-status-fixed">
							<div className="calculations">
								<div className="row">
									<div className="col-sm-9 text-right"><h3 style={{display: 'inline-block', marginTop: '8px', color: '#000', fontWeight: '800', fontSize: '1.4em'}}>Gross Total : <span className="grossPrice">{this.state.grossTotal}</span></h3></div>
									<div className="col-sm-3 text-left"><a style={{display: 'inline-block', marginTop: '0'}} href="#/cart" className="btn btn-warning">Go to Payment Page</a></div>
								</div>
								</div>
							</div>
					}
				</div>
			</form>
		</div>);
  }

	render() {
		return (<div><div className="container">
    <div class="row">
    <div class="col-sm-3">
      <Sidebar data={this.state.jsonData} filterChange={(e) => this.handleCheckboxChange(e)} />
    </div>
    <div class="col-sm-9">
      <PageHeading title="Browse Products" />
      {this.ProductListing()}
    </div>
    </div>
		</div>
		</div>
		);
	}
}


export default Products;
