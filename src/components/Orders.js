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
import Login from './Login.js';
import OrdersCustomerList from './OrdersCustomerList.js';


class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginData: []
		}
	}

	componentDidMount() {
		// Much detailed products list here -
		// https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json
		// https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/sap/ui/demokit/explored/products.json

		window.fetch('./data/products.json')
		.then(response => response.json())
		.then(data => this.setState({loginData: data.UserLogin}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE

		// PS. state to be never checked in console
	}

	handleLogin(u, p) {
		var c = 0;
		this.state.loginData.map(function(val, i){
			if(val.Username == u && val.Password == p) {
				c++;
			}
		});
		if(c > 0) {
			localStorage.setItem('userLoggedIn', u);
			window.location.reload();
		}
	}

	render() {
		const user = localStorage.getItem('userLoggedIn');

		if(user) {
			return(
				<div>
				<div className="container">
				<div className="login-content">
				<PageHeading title="User Login" />
					Coming soon
				</div>
				</div>
				</div>
			);
		}
		else {
			return(
				<div>
				<div className="container">
				<div className="login-content">
				<PageHeading title="User Login" />
				<Login handleLogin={this.handleLogin.bind(this)} />
				</div>
				</div>
				</div>
			);
		}
	}
}

export default Orders;
