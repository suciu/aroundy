import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SideBar from '../../components/sideBar';

import './index.css';

const UserDetail = ({user}) => {
    return (
        <tr className="colleaguesListTr">
            <td>{user.email}</td>
            <td>{user.jobTitle}</td>
            <td>-</td>
            <td>edit</td>
        </tr>
    );
};

export default class Colleagues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.state = {
            name: "",
            jobTitle: "",
            adminRole: false,
            email: "",
            contactPerson: "",
            contactPersonPhone: "",
            error: {
                text: "",
                fields: []
            }
        };

        this.toggle = this.toggle.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
        this.props.getAllColleagues(this.props.token);
    }

    onChange(e, path){
        let state = this.state;
        state[path] = e.target.value;
        return this.setState(state);
    }

    handleLogin(){
        const data = {
            name: this.state.name.trim(),
            jobTitle: this.state.jobTitle.trim(),
            adminRole: this.state.adminRole,
            email: this.state.email.trim(),
            contactPerson: this.state.contactPerson.trim(),
            contactPersonPhone: this.state.contactPersonPhone.trim(),
        };

        this.props.postNewUser(data);
        this.toggle();//close modal
        this.props.getAllColleagues(this.props.token);//get new users;
        
        // setTimeout(()=>{this.toggle();window.location="/colleagues"}, 200);
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
                                        <button onClick={this.toggle} className="colleaguesAddNewBtn">Add new</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="9" className="">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Colleague</th>
                                            <th>Job title</th>
                                            <th>Latest request</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {colleagues.map((user, index) => <UserDetail key={index} user={user} /> )}
                                    </tbody>
                                </table>
                                <Modal isOpen={this.state.modal}
                                       centered={true}
                                       toggle={this.toggle}
                                       className={this.props.className}
                                >
                                    <ModalHeader toggle={this.toggle}>Add new colleague</ModalHeader>
                                    <ModalBody>
                                        <Container>
                                            <Row className="show-grid">
                                                <Col xs={12} md={4}>
                                                    <code>
                                                        <p>Photo</p>
                                                        {/*<input type="file" name="pic" accept="image/*" label="de"/>*/}
                                                    </code>
                                                </Col>
                                                <Col xs={12} md={8}>
                                                    <code>
                                                        <div>
                                                            <div className="form-group">
                                                                <label htmlFor="name">Full Name</label>
                                                                <input onChange={(e) => this.onChange(e, "name")} id="name" type="text" className="form-control" placeholder="Full Name" required="required" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="jobTitle">Job Title</label>
                                                                <input onChange={(e) => this.onChange(e, "jobTitle")} id="jobTitle" type="text" className="form-control" placeholder="Job Title" required="required" />
                                                            </div>
                                                            <div className='custom-control custom-switch'>
                                                                <input
                                                                    onChange={(e) => this.onChange(e, "adminRole")}
                                                                    type='checkbox'
                                                                    className='custom-control-input'
                                                                    id='customSwitchesChecked'
                                                                    defaultChecked
                                                                />
                                                                <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                                                                    Administrator role
                                                                </label>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email</label>
                                                                <input onChange={(e) => this.onChange(e, "email")} id="email" type="text" className="form-control" placeholder="Email" required="required" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="contactPerson">Contact Person</label>
                                                                <input onChange={(e) => this.onChange(e, "contactPerson")} id="contactPerson" type="text" className="form-control" placeholder="Contact Person" required="required" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="contactPersonPhone">Contact Person Phone</label>
                                                                <input onChange={(e) => this.onChange(e, "contactPersonPhone")} id="contactPersonPhone" type="text" className="form-control" placeholder="Contact Person Phone" required="required" />
                                                            </div>

                                                        </div>
                                                    </code>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ModalBody>
                                    <ModalFooter>
                                        <div className="dashboardLorLink">
                                            <button onClick={this.toggle} className="colleaguesAddNewBtn">Cancel</button>
                                        </div>
                                        <div className="dashboardLorLink">
                                            <button onClick={this.handleLogin} className="colleaguesAddNewBtn">Add</button>
                                        </div>
                                    </ModalFooter>
                                </Modal>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}