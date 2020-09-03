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
import UserLogin from './UserLogin.js';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {jsonData: []};
	}
	
	componentDidMount() {
		// Much detailed products list here -
		// https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json
		
		window.fetch('./data/products.json')
		.then(response => response.json())
		.then(data => this.setState({jsonData: data.ProductCollection}));	// SYNTAX WHERE IF KEY AND VALUE ARE SAME THEN NO NEED TO SPECIFY VALUE
	
	}
	
	handleLogout(e) {
		localStorage.removeItem('userLoggedIn');
		window.location.reload();
	}
	
	render() {
		var categoryNav = "";
		var categoryList = [];
		
		const categories = this.state.jsonData.map(function(item, i) {
			if(categoryList.indexOf(item.Category) === -1) {
				categoryList.push(item.Category);
			}
			
		});
		
		var list = categoryList.map(function(item, i) {
			return [
				<li className="dropdown-item" key={i}><Link to={'/categories/'+item} className="nav-link">{item}</Link></li>
			];
			
		});
		
		const header = <div className="container">
		<div className="header"><Link to="/" className="siteLogo">
		<img style={{width: '30%', outline: '0'}} src="./amazonlocker1.png"className="img-fluid" /></Link>
		</div>
		</div>;
		
		const user = localStorage.getItem('userLoggedIn') ? 
		<ul className="nav navbar-expand-sm">
		<li className="nav-item user-login">
		<span className="nav-link">Welcome {localStorage.getItem('userLoggedIn')}</span>
		</li>
		<li className="nav-item user-login">
		<span className="separator" style={{color: '#FFF', top: '9px', position: 'relative'}}>|</span>
		</li>
		<li className="nav-item user-login">
		<Link to="/login" className="nav-link" onClick={this.handleLogout.bind(this)}>Logout</Link>
		</li> 
		</ul> 
		: <ul className="nav navbar-expand-sm">
		<li className="nav-item user-login"><Link to='/login' className="nav-link">Login</Link>
		</li>
		</ul>;
				
		return (<div className="container-fluid top-navigation">
			{header}
			<div className="container-fluid nav-wrapper">
			<div className="container">
			<div className="row">
			<div className="col-sm-8">
			<ul className="nav navbar-nav appNav navbar-expand-sm">
				<li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
				<li className="nav-item"><Link to='/products' className="nav-link">Browse</Link></li>
				<li className="nav-item dropdown"><Link to='/categories' className="nav-link dropdown-toggle" data-toggle="dropdown">Categories</Link>
					<ul className="dropdown-menu">
					{list}
					</ul>
				</li>
				<li className="nav-item"><Link to='/cart' className="nav-link">Cart</Link></li>
				<li className="nav-item"><Link to='/orders' className="nav-link">My Orders</Link></li>
				<li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
			</ul>
			</div>
			<div className="col-sm-4">
				{user}
			</div>
			</div>
			</div>
			</div>
			</div>
			);
	}
}
 
export default Header;