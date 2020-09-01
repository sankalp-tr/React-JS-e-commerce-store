import React from 'react';
import ReactDOM, {render} from 'react-dom';

import App from './App';
import {Provider as ReduxProvider} from 'react-redux';
import ReduxApp from './ReduxApp';
import configureStore from './redux/configureStore';
import Wrapper from './Wrapper';

ReactDOM.render(<App />, document.getElementById('root'));
