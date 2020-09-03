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
import Modal from './Modal.js';
import '../App.css';


class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {jsonData: []};
	}

	render() {
		var categoryNav = "";
		var categoryList = [];

		return (<div>
				<div className="container-fluid footer">
					<div className="container">
					<div className="row">
					<Modal ref="modal" />
					<div className="col-sm-3">
						<ul className="nav navbar-nav">
							<li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
							<li className="nav-item"><Link to='/about' className="nav-link">About Us</Link></li>
							<li className="nav-item"><Link to='/products' className="nav-link">Products</Link></li>
							<li className="nav-item"><Link to='/cart' className="nav-link">Cart</Link></li>
							<li className="nav-item"><Link to='/orders' className="nav-link">My Account</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Customer Support</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Newsletter</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Offers &amp; Deals</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">My Gifts</Link></li>
						</ul>
					</div>
					<div className="col-sm-3">
						<ul className="nav navbar-nav">
							<li className="nav-item"><Link to='/contact' className="nav-link">New Arrivals</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Coupons</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Locate a Center</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">FAQs</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">User Login</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Sellers List</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Blog</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Careers</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Terms &amp; Conditions</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Privacy Policy</Link></li>
						</ul>
					</div>
					<div className="col-sm-3">
						<ul className="nav navbar-nav">
							<li className="nav-item"><Link to='/contact' className="nav-link">New Arrivals</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Coupons</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Locate a Center</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">FAQs</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">User Login</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Sellers List</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Blog</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Careers</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Terms &amp; Conditions</Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link">Privacy Policy</Link></li>
						</ul>
					</div>
					<div className="col-sm-3">
						<ul className="nav navbar-nav">
							<li className="nav-item"><Link to='/contact' className="nav-link"><i className="fa fa-facebook"></i></Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link"><i className="fa fa-twitter"></i></Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link"><i className="fa fa-linkedin"></i></Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link"><i className="fa fa-instagram"></i></Link></li>
							<li className="nav-item"><Link to='/contact' className="nav-link"><i className="fa fa-youtube"></i></Link></li>
						</ul>
					</div>
					</div>
					</div>
				</div>

				<div className="container-fluid footer-secondary" style={{background: "#666", paddingTop: "10px", paddingBottom: "10px", color: "#FFF"}}>
				<div className="row">
					<div className="col-sm-12">
						<div className="text-center">&copy; Store 2019</div>
					</div>
				</div>
				</div>
			</div>
			);
	}
}

export default Footer;
