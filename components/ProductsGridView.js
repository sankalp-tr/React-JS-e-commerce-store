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


class ProductsGridView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  data: this.props.data,
		  qty: Array(this.props.data.length).fill(0)
		};

		//console.log(this.props);
	}

	handleChange(e, items, i, limitIndex) {				// checking limitIndex (total items < 13) everywhere
		let tempQty = this.state.qty;
		tempQty[i] = Number(e.target.value);
		var gross = this.props.totalGross(tempQty, e.target.value, i, items, limitIndex);

		this.setState({
		  qty: tempQty,
		  grossTotalState: gross
		});

	}

	/*calculateGrossTotal(e) {
		let tempQty = this.state.qty;
		tempQty[i] = e.target.value;
	}*/

	render() {
		var limitIndex = this.props.displayCount ? this.props.displayCount : false;
		var cardData = this.props.data.map((item, index) => {
	
		// for string search includes vs search vs indexOf
		var searchStr = this.props.searchFor ? (item.Name.toLowerCase().includes(this.props.searchFor.toLowerCase()) || item.Description.toLowerCase().includes(this.props.searchFor.toLowerCase())): true;
		var searchCat = this.props.category ? (this.props.category ==  item.Category): true;
		
		//var searchFilterList = this.props.filterList ? (this.props.filterList ==  item.Category): true;
		var categoryOccurenceCount = 0;

			if(searchStr && searchCat) {
		
				let picUrl = item.ProductPicUrl;
				let defaultQtyForFetch = this.state.qty[index]? this.state.qty[index]: 0;

				return[
					<div className="col-3 pr-4 card" key={index} id={index}>
						<div className="card-image">
							<button type="button" style={{background: 'transparent', border: '0', outline: '0'}} data-toggle="modal" data-target="#myModal">
								<img src={picUrl} className="img-fluid" style={{width:"25em", margin: '0 auto'}} />
							</button>
						</div>
						<div className="gridAddToCart">
							{
							(item.Quantity > 0)
							? <Link to={`/cart/${item.ProductId}`} className="btn btn-warning">Add to Cart</Link>
							: ""
							}
						</div>
						<div className="card-name"><Link to={`/product-detail/${item.ProductId}`} style={{textDecoration: "none"}}><strong>{item.Name}</strong></Link></div>
						<strong><span className="tblCurrency">{item.CurrencyCode}</span> <span className="tblPrice" ref="tblPrice">{item.Price}</span></strong>
						<div className="card-description text-left">{item.Description}</div>
						<div className="card-category"><strong>Category : </strong>{item.Category}</div>
						<div className="card-avail">{(item.Quantity > 0)? item.Status: "Out of Stock"}</div>
						<div className="catalogItemMeta">
							<span><input type="number" name="productQuantity" id={index} value={defaultQtyForFetch} onChange={(e) => { this.handleChange(e, this.props.data, index, limitIndex) }} style={{width: '45px', textAlign: 'center' }} /></span>
							<strong>Total : <span className="itemsPrice"ref="itemsPrice">{item.Price * defaultQtyForFetch}</span></strong>
						</div>
					</div>
				]
			}
		});

		return(<div className="grid-wrapper row">{cardData}</div>);
	}
}

export default ProductsGridView;
