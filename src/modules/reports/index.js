import React, { Component } from 'react';
import { Row } from 'reactstrap';

import SideBar from '../../components/sideBar';

import './index.css';

export default class Reports extends Component {
    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
    }

    render() {
        const data = this.props.userDetails.data;

        return(
            <Row>
                <SideBar data={data}/>
            </Row>
        );
    }
}