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
import ContactForm from './ContactForm.js';
import Article from './Article.js';

class Contact extends React.Component {
	render() {	
		return (<div>
					<div className="container">
					<div className="content">
						<div className="row">
							<div className="col-sm-6 contactForm">
								<ContactForm title="Write to us"/>
							</div>
							<div className="col-sm-6 contactDisclaimer">
								<div>
									<PageHeading title="Our Addresses"/>
									<ul>
										<li>Cecilia Chapman sdfsf sdefweefwefef sdfsdf asdfas fasf<br/>711-2880 Nulla St.<br/>Mankato Mississippi 96522<br/>(257) 563-7401</li>
										<li>Iris Watson q2wewqd sdfqweqwwd safweeggee wewerqwer<br/>P.O. Box 283 8562 Fusce Rd.<br/>Frederick Nebraska 20620<br/>(372) 587-2335</li>
										<li>Celeste Slater sdQWEWQ Qdsfsdf werwewer werwewe wer werwerwer<br/>606-3727 Ullamcorper. Street<br/>Roseville NH 11523<br/>(786) 713-8616</li>
										<li>Iris Watson q2wewqd sdfqweqwwd safweeggee wewerqwer<br/>P.O. Box 283 8562 Fusce Rd.<br/>Frederick Nebraska 20620<br/>(372) 587-2335</li>
									</ul>
								</div>
								<div>
									<PageHeading title="Our Offices"/>
									<img src="https://cdn.splessons.com/spf/c81e728d9d4c2f636f067f89cc14862c/wp-content/uploads/2016/02/google-maps-types-splessons.png" />
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
				);
	}
}
 
export default Contact;