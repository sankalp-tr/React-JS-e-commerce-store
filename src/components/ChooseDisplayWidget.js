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


class ChooseDisplayWidget extends React.Component {
	constructor(props) {
		super(props);
	}
	  
	render() {
				return[
				<div style={{margin: '0'}}>
					<button type="button" key="list" className="btn btn-default list" onClick={(e) => this.props.list(e, "list")}></button>
					<button type="button" key="grid" className="btn btn-default grid" onClick={(e) => this.props.grid(e, "grid")}></button>
				</div>
				]
			}
}

export default ChooseDisplayWidget;