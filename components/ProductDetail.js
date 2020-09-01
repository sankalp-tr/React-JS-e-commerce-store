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

class ProductDetailDesign extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: this.props.detailPageData, value: 0};
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
	//	let picUrl = "https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/" + this.props.detailPageData.ProductPicUrl.split("/").slice(1).join("/");
		let picUrl = this.props.detailPageData.ProductPicUrl;

		return(
		<div className="row pdp-item">
			<div className="col-sm-6" style={{maxHeight: '550px', overflow: 'hidden'}}><img src={picUrl} class="img-responsive" style={{width: '100%', height: '100%'}} /></div>
			<div className="col-sm-6">
				<PageHeading title={this.props.detailPageData.Name} />
				<div className="col-sm-12 description">{this.props.detailPageData.Description}</div>
				<div className="col-sm-12"><strong>Category : </strong>{this.props.detailPageData.Category}</div>
				<div className="col-sm-12"><strong>Supplier Name : </strong>{this.props.detailPageData.SupplierName}</div>
				<div className="col-sm-12"><strong>Price : </strong>{this.props.detailPageData.CurrencyCode} {this.props.detailPageData.Price}</div>
				<div className="col-sm-12 green"><strong>{this.props.detailPageData.Status ? "In Stock" : ""}</strong></div>
				<div className="col-sm-12"><strong>Quantity : </strong>{this.props.detailPageData.Quantity}</div>
				<div className="col-sm-12"><input type="number" name="productQuantity" value={this.state.value} onChange={(e) => { this.handleChange(e) }} style={{width: '45px', textAlign: 'center' }} /></div>
				<div className="col-sm-12"><Link to={`/cart/${this.props.detailPageData.ProductId}`} className="btn btn-warning pdp-btn">Add to Cart</Link></div>
			</div>
		</div>
		);
	}
}

class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonData: []
		};
	}

	componentDidMount() {
		// Much detailed products list here -
		// https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json

		window.fetch('./data/products.json')
		.then(response => response.json())
		.then(data => this.setState({jsonData: data.ProductCollection}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE

	}

	render() {
		var pageId = this.props.match.params.prodId;
		var callStatus = false;
		var singleData = {};

		const detailPageData = this.state.jsonData.map(function(item){
			if(item.ProductId == pageId) {
				callStatus = true;
				singleData = item;
			}
		});
		return(
		<div>
			<div className="container">
			<div className="content">
			{callStatus? <ProductDetailDesign detailPageData={singleData} />: ""}
			</div>
			</div>
		</div>);
	}
}


export default ProductDetail;
