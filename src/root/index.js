import React, { Component } from 'react';
import {Provider} from 'react-redux';

/** CSS */
import './root.css';

import Routes from "../routes"

import store from '../redux/store';


export default class App extends Component {
    render() {
        let props = this.props;

        return(
            <Provider store={store}>
                <Routes {...props}/>
            </Provider>
        );
    }
}

