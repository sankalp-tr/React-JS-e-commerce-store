import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import history from './history.js';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Notfound from './components/404.js';
import Cart from './components/Cart.js';
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import Categories from './components/Categories.js';
import CategoriesLanding from './components/CategoriesLanding.js';
import Contact from './components/Contact.js';
import Index from './components/Home.js';
import Orders from './components/Orders.js';
import ProductDetail from './components/ProductDetail.js';
import Products from './components/Products.js';
import Footer from './components/Footer.js';
import UserLogin from './components/UserLogin.js';

class App extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
		return(
		<div className="page">
			<Router history={history}>
				<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route exact path="/login" component={UserLogin} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/categories/:id" component={Categories} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/product-detail/:prodId" component={ProductDetail} />
					<Route exact path="/cart/:prodId" component={Cart} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/orders" component={Orders} />
					<Route component={Notfound} />
				</Switch>
				<Footer/>
				</div>
			</Router>
			<Modal ref="modal" />
		</div>
		);
	}
}


export default App;