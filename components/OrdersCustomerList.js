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


class OrdersCustomerList extends React.Component {
	render() {
		return(
		<table className="table table-hover">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Order ID</th>
							<th>Order Summary</th>
							<th>Number of Products</th>
							<th>Grand Total</th>
							<th>Invoice Link</th>
							<th>Customer Contact</th>
						</tr>
					</thead>
					<OrdersCustomerListRow data={this.props.data} totalGross={this.props.totalGross} category={this.props.category} searchFor={this.props.searchFor} />
				</table>
		);
	}
}

class OrdersCustomerListRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  data: this.props.data
		};
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

export default OrdersCustomerList;
