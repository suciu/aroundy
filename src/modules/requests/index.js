import React, { Component } from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import {Moment} from 'react-moment';

import "./index.css"

import SideBar from '../../components/sideBar';

const MyDetail = ({user}) => {
    const startDate =  new Date(user.startDate).toLocaleDateString("en-US"),
          endDate =  new Date(user.endDate).toLocaleDateString("en-US");

    return (
        <tr className="colleaguesListTr">
            <td>{user.id}</td>
            <td>{user.status}</td>
            <td>
                {user.interval === 1
                    ?
                    startDate
                    :
                    `${startDate} - ${endDate}`
                }
            </td>
            <td>{user.type}</td>
            <td>-</td>
        </tr>
    );
};

const ColleagueDetail = (props) => {
    const startDate =  new Date(props.user.startDate).toLocaleDateString("en-US"),
        endDate =  new Date(props.user.endDate).toLocaleDateString("en-US");

    return (
        <tr className="colleaguesListTr">
            <td>{props.user.id}</td>
            <td>{props.user.user ? props.user.user.name : ""}</td>
            <td>
                {props.user.interval === 1
                    ?
                    `${startDate} (${props.user.interval}) day`
                    :
                    `${startDate} - ${endDate} (${props.user.interval}) days`
                }
            </td>
            <td>{props.user.type}</td>
            <td>{props.user.status}</td>
            <td>
                <span onClick={props.onClick(props.user)} className="approveBtn">Approve</span>
            </td>
        </tr>
    );
};

export default class Requests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.approve = this.approve.bind(this);
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

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    approve(user) {
        console.log(user);
    }

    render() {
        const data = this.props.userDetails.data,
              userRequests = this.props.userRequests.data,
              userColleaguesRequests = this.props.userRequests.data;

        const colleaguesList = userColleaguesRequests.map( (user, index) =>
                  <tr key={index} className="colleaguesListTr">
                      <td>{user.id}</td>
                      <td>
                          1
                      </td>
                      <td>
                          1
                      </td>
                      <td>
                          1
                      </td>
                      <td>
                          1
                      </td>
                      <td>
                            <span
                                onClick={(e) => this.approve(e, user)}
                                className="approveBtn">Approve</span>
                      </td>
                  </tr>
              );

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
                                                {
                                                    colleaguesList
                                                }
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
                <Modal isOpen={this.state.modal}
                       centered={true}
                       toggle={this.toggleModal}
                       className={this.props.className}
                >
                    <ModalHeader toggle={this.toggleModal}>Leave request from Muntean Teodor </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row className="show-grid">
                                <Col xs={12}>
                                    <code>
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="startDate">Selected date</label>
                                                { this.state.days === 1 ?
                                                    <Col xs={8}>
                                                        <input id="startDate" type="text" className="form-control" disabled={true} value={""} />
                                                    </Col> :
                                                    <div>
                                                        <Col xs={6}>
                                                            <input id="startDate" type="text" className="form-control" disabled={true} value={""} />
                                                        </Col>
                                                        <Col xs={6}>
                                                            <input id="endDate" type="text" className="form-control" disabled={true} value={""} />
                                                        </Col>
                                                    </div>
                                                }
                                            </div>
                                            <Col xs={8}>
                                                <div className="form-group">
                                                    <label htmlFor="leaveType">Leave Type</label>
                                                    <input value={""} disabled={true} id="leaveType" type="text" className="form-control" required="required" />
                                                </div>
                                            </Col>
                                            <Col xs={8}>
                                                <div className="form-group">
                                                    <label htmlFor="notifyPm">Notify PM</label>
                                                    <input value={""} disabled={true} id="notifyPm" type="text" className="form-control" required="required" />
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="form-group">
                                                    <label htmlFor="comments">Comments</label>
                                                    <input value={""} disabled={true} id="comments" type="text" className="form-control" required="required" />
                                                </div>
                                            </Col>
                                        </div>
                                    </code>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <div className="dashboardLorLink">
                            <button onClick={this.toggleModal} className="colleaguesAddNewBtn">Cancel</button>
                        </div>
                        <div className="dashboardLorLink">
                            <button type="button" onClick={this.handleAddNewRequest} className="colleaguesAddNewBtn">Approve</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </Row>
        );
    }
}

