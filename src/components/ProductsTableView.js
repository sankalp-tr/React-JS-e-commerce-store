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


class ProductsTableView extends React.Component {
	render() {
		return(
		<table className="table table-hover">
					<thead>
						<tr>
							<th>Name</th>
							<th style={{textAlign: 'center'}}>Image</th>
							<th>Description</th>
							<th>Category</th>
							<th>In Stock</th>
							<th>Quantity</th>
							<th>Cost</th>
							<th>Total</th>
							<th>Actions</th>
						</tr>
					</thead>
					<ProductsTableRow data={this.props.data} totalGross={this.props.totalGross} category={this.props.category} searchFor={this.props.searchFor} />
				</table>
		);
	}
}

class ProductsTableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  data: this.props.data,
		  qty: Array(this.props.data.length).fill(0)
		};
	}

	handleChange(e, items, i, limitIndex) {				// checking limitIndex (total items < 13) everywhere
		let tempQty = this.state.qty;
		tempQty[i] = Number(e.target.value);
		var gross = this.props.totalGross(tempQty, e.target.value, i, items, limitIndex);

		this.setState({
		  qty: tempQty
		});

	}

	/*calculateGrossTotal(e) {
		let tempQty = this.state.qty;
		tempQty[i] = e.target.value;
	}*/

	preventEvent(e, pic) {

	}

	render() {
		var rowData = this.props.data.map((item, index) => {
		var limitIndex = 13;
		// for string search includes vs search vs indexOf
		var searchStr = this.props.searchFor ? (item.Name.toLowerCase().includes(this.props.searchFor.toLowerCase()) || item.Description.toLowerCase().includes(this.props.searchFor.toLowerCase())): true;
		var searchCat = this.props.category ? (this.props.category ==  item.Category): true;

			if(searchStr && searchCat) {
			// let picUrl = "https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/" + item.ProductPicUrl.split("/").slice(1).join("/");
			let picUrl = item.ProductPicUrl;
			let defaultQtyForFetch = this.state.qty[index]? this.state.qty[index]: 0;
			return[
				<tr key={index}>
					<td>{item.Name}</td>
					<td>
						<button type="button" style={{background: 'transparent', border: '0', outline: '0'}} onClick={(e) => this.preventEvent(e, picUrl)} data-toggle="modal" data-target="#myModal">
							<img src={picUrl} className="img-fluid" style={{maxWidth:"100px", margin: '0 auto'}} />
						</button>
					</td>
					<td>{item.Description}</td>
					<td>{item.Category}</td>
					<td>{(item.Quantity > 0)? item.Status: "Out of Stock"}</td>
					<td><input type="number" name="productQuantity" id={index} value={defaultQtyForFetch} onChange={(e) => { this.handleChange(e, this.props.data, index, limitIndex) }} style={{width: '45px', textAlign: 'center' }} /></td>
					<td><strong><span className="tblCurrency">{item.CurrencyCode}</span> <span className="tblPrice" ref="tblPrice">{item.Price}</span></strong></td>
					<td><strong><span className="itemsPrice"ref="itemsPrice">{item.Price * defaultQtyForFetch}</span></strong></td>
					<td className="tblAddToCart">
						<Link to={`/product-detail/${item.ProductId}`} style={{textDecoration: "none"}}>View Product</Link>
						<br/>
						{
						(item.Quantity > 0)
						? <Link to={`/cart/${item.ProductId}`} className="btn btn-warning">Add</Link>
						: ""
						}
					</td>
				</tr>
			]
			}
		});

		return(<tbody>{rowData}</tbody>)
	}
}

export default ProductsTableView;
