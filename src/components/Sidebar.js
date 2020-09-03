import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PageHeading from './PageHeading.js';
import Heading from './Heading.js';
import $ from 'jquery';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		}
	}

	componentDidMount() {
		$(document).ready(function(){
			$(window).on('scroll', function(){
				if($(window).scrollTop() >= 150) {
					$('.sidebar').addClass('fixed');
				}
				else if($(window).scrollTop() == $(window).scrollHeight) {
					$('.sidebar').removeClass('fixed');
				}
				else {
					$('.sidebar').removeClass('fixed');
				}
			});
		});
	}
	
	render() {
		let cats = [];
		let sups = [];
		
		this.props.data.map(function(item, i, categories){
			if(cats.indexOf(item.Category) === -1) {
				return cats.push(item.Category);
			}
		});

		this.props.data.map(function(item, i, suppliers){
			if(sups.indexOf(item.SupplierName) === -1) {
				return sups.push(item.SupplierName);				
			}
		});
		
		let categories = cats.map(function(item, i, cats){
			return <label>{item} <input type="checkbox" value={item} key={item} onChange={this.props.filterChange} /></label>;
		}, this);
		
		let suppliers = sups.map(function(item, i, sups){
			return <label>{item} <input type="checkbox" value={item} key={item} onChange={this.props.filterChange} /></label>;
		}, this);
 
		return (
			<div class="sidebar">
				<Heading title="Filters" />
				<ul style={{listStyleType: 'none', paddingLeft: '0'}}>
					<li>
						<div>
							<h6>Price : </h6>
							<div className="filter price-filter">
							<input type="text" name="min-price" className="form-control" placeholder="min price" />
							-
							<input type="text" name="max-price" className="form-control" placeholder="max price" />
							</div>
						</div>
					</li>
					<li>
					<h6>Category : </h6>
						<div className="filter category-filter">
							{categories}
						</div>
					</li>
					<li>
					<h6>Supplier Name : </h6>
						<div className="filter supplier-filter">
							{suppliers}
						</div>
					</li>
				</ul>
			</div>);
	}
}
export default Sidebar;
