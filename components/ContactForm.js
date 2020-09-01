import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
import PageHeading from './PageHeading.js';


class ContactForm extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
		<div>
		<PageHeading title={this.props.title} />
			<div className="col-sm-12"><input type="text" className="form-control" placeholder="First Name" /></div>
			<div className="col-sm-12"><input type="text" className="form-control" placeholder="Last Name" /></div>
			<div className="col-sm-12"><input type="text" className="form-control" placeholder="Email" /></div>
			<div className="col-sm-12"><input type="text" className="form-control" placeholder="Phone No." /></div>
			<div className="col-sm-12"><input type="text" className="form-control" placeholder="Website" /></div>
			<div className="col-sm-12 text-center"><input type="button" className="btn btn-info" value="Submit Query" /></div>
		</div>
		)
	}
}

export default ContactForm;