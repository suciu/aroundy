import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import SideBar from '../../components/sideBar';

import './index.css';

const UserDetail = ({user}) => {
    return (
        <tr className="colleaguesListTr">
            <td>{user.email}</td>
            <td>-</td>
            <td>-</td>
            <td>&nbsp;</td>
        </tr>
    );
};

export default class Colleagues extends Component {
    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
        this.props.getAllColleagues(this.props.token);
    }

    render() {
        const user = this.props.userDetails.data;
        const colleagues = this.props.colleagues.data;

        return(
            <Row>
                <SideBar user={user}/>
                <Col xs="9" className="content dashboard">
                    <div className="justify-content-md-center marginTop20">
                        <Row>
                            <Col xs="9" className="">
                                <p className="dashboardText">Colleagues</p>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="9" className="">
                                <div className="dashboardLor">
                                    <div className="dashboardLorText">
                                        <input className="userFilterByName" placeholder={'Filter by name'}/>
                                    </div>
                                    <div className="dashboardLorLink">
                                        <button className="colleaguesAddNewBtn">Add new</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="9" className="">
                                <table>
                                    <tr>
                                        <th>Colleague</th>
                                        <th>Job title</th>
                                        <th>Latest request</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    {colleagues.map((user, index) => <UserDetail key={index} user={user} /> )}
                                </table>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}