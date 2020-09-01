import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Index from './newcomponents/Index';
import Show from './newcomponents/Show';
import NotFound from './newcomponents/NotFound';
import Header from './newcomponents/Header';

class Wrapper extends React.Component {
	render() {
			return(
				<Router>
					<Header/>
					<Switch>
						<Route exact component={Index} path="/" />
						<Route exact component={Show} path="/show" />
						<Route exact component={NotFound} />
					</Switch>
				</Router>
			)
	}
}

export default Wrapper;
