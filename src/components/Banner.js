import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
//import OwlCarousel from 'react-owl-carousel2';
import '../App.css';
 
class Banner extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const options = {
		items: 1,
		nav: true,
		rewind: true,
		autoplay: true
		};

		const events = {
		};

		return(
		<div classame="container-fluid">
			<div classame="row" style={{position: 'relative'}}>
				<div className="site-banner">
					<div><img src="./Banner-Batterien-Solar-web_17f1199fab90a9f453b9ba4167c28e87.jpg" width="100%" /></div>
				</div>
				<div className="banner-text"><h1 className="banner-heading">Welcome to xyz Store</h1></div>
			</div>
		</div>
		);
	}
}
 
export default Banner;