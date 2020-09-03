import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
 
class PageHeading extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(<h2 className="main-heading"><span>{this.props.title}</span></h2>);
	}
}
 

export default PageHeading;