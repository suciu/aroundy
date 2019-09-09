import React, { Component } from 'react';
import { Row } from 'reactstrap';

import SideBar from '../../components/sideBar';
import Content from '../../components/content/dashboard';

import './index.css';

export default class Dashboard extends Component {
    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
    }

    render() {
        const user = this.props.userDetails.data;

        return(
            <Row>
                <SideBar user={user}/>
                <Content />
            </Row>
        );
    }
}