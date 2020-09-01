import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
 
class Heading extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(<h3 className="sub-heading"><span>{this.props.title}</span></h3>);
	}
}
 

export default Heading;