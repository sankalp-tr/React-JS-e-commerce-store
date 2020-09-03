import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';

import PageHeading from './PageHeading.js';
import Heading from './Heading.js';
import Article from './Article.js';

 
class Cart extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		var cartDetails = <span></span>;
		if(this.props.match.params.prodId) {
			cartDetails = <Article content={this.props.match.params.prodId + ' Added to Cart'} />;
		}
		else {
			cartDetails = <Article content="You have 0 items in your cart." />;
		}
		
		return(<div>
		<div className="container">
		<div className="content">
		<PageHeading title="My Cart" />
		{cartDetails}
		</div></div>
		</div>);
	}
}
 
export default Cart;