// packages

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import history from './history.js'
import $ from 'jquery';
import './testindex.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Header from './reduxcomponents/Header.js';
import Home from './reduxcomponents/Home.js';
import About from './reduxcomponents/About.js';
import User from './reduxcomponents/Registration.js';
import NotFound from './reduxcomponents/NotFound.js';

//code
function ReduxApp() {
	return (
	<div className="container-fluid" style={{textAlign: 'center'}}>
		<Router>
		<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/user" component={User} />
				<Route exact component={NotFound} />
			</Switch>
		</Router>
	</div>
	);
}

export default ReduxApp;
