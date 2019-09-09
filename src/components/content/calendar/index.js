import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';

import "../index.css";

const Content = () => {
    return (
        <Col xs="9" className="content dashboard">
            <div className="justify-content-md-center marginTop20">
                <Row>
                    <Col xs="9" className="">
                        <p className="dashboardText">Calendar</p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col xs="9" className="whiteBackground">
                        1
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Content;