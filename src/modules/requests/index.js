import React, { Component } from 'react';
import { Row } from 'reactstrap';

import SideBar from '../../components/sideBar';

export default class Requests extends Component {
    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
    }

    render() {
        const user = this.props.userDetails.data;

        return(
            <Row>
                <SideBar user={user}/>
            </Row>
        );
    }
}

