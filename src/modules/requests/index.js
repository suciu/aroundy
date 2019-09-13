import React, { Component } from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import "./index.css"

import SideBar from '../../components/sideBar';

const MyDetail = ({user}) => {
    return (
        <tr className="colleaguesListTr">
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>edit</td>
            <td>-</td>
        </tr>
    );
};

const ColleagueDetail = ({user}) => {
    return (
        <tr className="colleaguesListTr">
            <td>2</td>
            <td>2</td>
            <td>edit</td>
            <td>edit</td>
            <td>edit</td>
            <td>-</td>
        </tr>
    );
};

export default class Requests extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    componentDidMount(){
        this.props.getUserDetails(this.props.token);
        this.props.getUserRequests(this.props.token);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });

            if ( tab === "1")  this.props.getUserRequests(this.props.token);
            if ( tab === "2")  this.props.getColleaguesRequests(this.props.token);
        }
    }

    render() {
        const data = this.props.userDetails.data,
              userRequests = this.props.userRequests.data,
              userColleaguesRequests = this.props.userRequests.data;

        return(
            <Row>
                <SideBar data={data}/>
                <Col xs="9" className="content dashboard">
                    <div className="justify-content-md-center marginTop20">
                        <Row>
                            <Col xs="9" className="noPadding">
                                <p className="dashboardText">Requests</p>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="9" className="noPadding">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            My Requests
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            Colleague's requests
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="9" className="noPadding backgroundWhite requestFilter">
                                <div className="dashboardLor">
                                    <div className="dashboardLorText">

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col xs="9" className="noPadding">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID#</th>
                                                    <th>Status</th>
                                                    <th>Time interval</th>
                                                    <th>Request type</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userRequests.map((user, index) => <MyDetail key={index} user={user} /> )}
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col xs="9" className="noPadding">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>ID#</th>
                                                <th>Colleague</th>
                                                <th>Time interval</th>
                                                <th>Request type</th>
                                                <th>Status</th>
                                                <th>Approval</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {userColleaguesRequests.map((user, index) => <ColleagueDetail key={index} user={user} /> )}
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
            </Row>
        );
    }
}

