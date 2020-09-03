import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
import Heading from './Heading.js';
 
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "", 
			pass: ""
		};
	}
	
	handleChange = (e) => {
		if(e.target.name == "username") {			
			this.setState ({
				user: e.target.value
			});
		}
		else if(e.target.name == "password") {			
			this.setState ({
				pass: e.target.value
			});
		}
	}
	
	render() {
		return(
			<div className="login-form">
				<div className="row">
					<div className="col-sm-12">
						<form>
							<Heading title="Login" />
							<input type="text" name="username" value={this.state.user} onChange={this.handleChange} placeholder="username" className="form-control" />
							<input type="password" name="password" value={this.state.pass} onChange={this.handleChange} placeholder="passowrd" className="form-control" />
							<input type="button" name="login" className="btn btn-warning" value="Login" onClick={this.props.handleLogin(this.state.user, this.state.pass )} />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
 

export default Login;