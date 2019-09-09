import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

import "../index.css";

const Content = () => {
    return (
        <Col xs="9" className="content dashboard">
            <div className="justify-content-md-center marginTop20">
                <Row>
                    <Col xs="9" className="">
                        <p className="dashboardText">Aroundy Dashboard</p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3" className="whiteBackground maxWidth height">
                        <div className="dashboardLor">
                            <div className="dashboardLorText">Latest Open Request</div>
                            <div className="dashboardLorLink">
                                <Link to={'requests'} className="active">View All</Link>
                            </div>
                        </div>
                        <div className="dashboardLorData">
                            <div className="dashboardLorDataText">
                                02 September 2019<br />
                                13 September 2019 (10 Days)
                            </div>
                            <div className="dashboardLorDataStatus dataStatusPending">Pending</div>
                        </div>
                    </Col>
                    <Col xs="3" className="whiteBackground marginLeft height">
                        <div className="dashboardLor">
                            <div className="dashboardLorText">Latest Closed Request</div>
                            <div className="dashboardLorLink">
                                <Link to={'requests'} className="active">View All</Link>
                            </div>
                        </div>
                        <div className="dashboardLorData">
                            <div className="dashboardLorDataText">
                                16 September 2019<br />
                                (1 Day)
                            </div>
                            <div className="dashboardLorDataStatus dataStatusApproved">Approved</div>
                        </div>
                    </Col>
                    <Col xs="3" className="whiteBackground marginLeft height">
                        <div className="dashboardLor">
                            <div className="dashboardLorText">Balance</div>
                        </div>
                        <div className="dashboardLorData">
                            <div className="dashboardLorDataText">
                                <span className="userDays">16,5 DAYS</span>
                                /From the total of 21 days
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="9" className="whiteBackground height">
                        4
                    </Col>
                </Row>
                <Row>
                    <Col xs="9" className="whiteBackground">
                        5
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Content;