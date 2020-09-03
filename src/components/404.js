import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';

import PageHeading from './PageHeading.js';
import Heading from './Heading.js';
import Article from './Article.js';


const Notfound = () => {
	return (<div>
		<div className="container">
		<div className="login-content">
		<PageHeading title="404 Error!" />
		<Heading title="Page Not Found" />
		<Article content="The page you were looking for was not found." />
		</div>
		</div></div>);
}

export default Notfound;