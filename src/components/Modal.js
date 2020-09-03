import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';


class Modal extends React.Component {
	render() {
		return(
		<div id="myModal" className="modal fade" role="dialog">
		  <div className="modal-dialog">

			<div className="modal-content">
			  <div className="modal-header">
				<button type="button" className="close" data-dismiss="modal">&times;</button>
			  </div>
			  <div className="modal-body">
				<img src="https://raw.githubusercontent.com/SAP/openui5/master/src/sap.ui.demokit/test/sap/ui/demokit/explored/img/HT-1001.jpg" />
			  </div>
			</div>

		  </div>
		</div>
		)
	}
}

export default Modal;