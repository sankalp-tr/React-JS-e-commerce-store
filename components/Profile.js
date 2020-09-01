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

 
class Profile extends React.Component {
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
	
	render() {
		const user = localStorage.getItem('userLoggedIn');
		
		if(user) {
			return(
				<div>
				<div className="container">
				<div className="login-content">
				<PageHeading title="My Profile" />
				<div className="row">
					<div className="col-sm-12">
						I am {this.props.user}
					</div>
				</div>
				<div className="row">
					
					<div className="col-sm-5 borderDiv">
						<Heading title="Orders History" />
						<ul>
							<li>Order 1</li>
							<li>Order 2</li>
							<li>Order 3</li>
						</ul>
					</div>
					<div className="col-sm-5 borderDiv">
						<Heading title="Payement Methods" />
						<ul>
							<li>Method 1</li>
							<li>Method 2</li>
							<li>Method 3</li>
						</ul>
					</div>
					<div className="col-sm-5 borderDiv">
						<Heading title="Gifts & Subscriptions" />
						<ul>
							<li>Gift 1</li>
							<li>Gift 2</li>
							<li>Gift 3</li>
						</ul>
					</div>
					<div className="col-sm-5 borderDiv">
						<Heading title="Settings" />
						<ul>
							<li>Setting 1</li>
							<li>Setting 2</li>
							<li>Setting 3</li>
						</ul>
					</div>
				</div>
				</div>
				</div>
				</div>
			);
		} 
	}
} 

export default Profile;