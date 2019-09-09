import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import history from './root/history';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Root history={history} />, document.getElementById('root'));
