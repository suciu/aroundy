import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import Holidays from 'date-holidays';

import SideBar from '../../components/sideBar';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';


export default class CalendarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            startDate: {},
            endDate: {},
            startDateString: "",
            endDateString: "",
            days: 0,
            leaveType: "",
            notifyPm: "",
            comments: "",
            calendarEvents: [],
            calendarComponentRef: React.createRef()
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.props.getUserDetails(this.props.token);

        const hd = Holidays('RO'),
              holidays = hd.getHolidays(new Date().getFullYear());

        console.log(holidays);

        const calendarEvents = holidays.map((holiday, index)=>{

            return  {
                title: holiday.name,
                start: holiday.start,
                end: holiday.end,
                color: '#FFE1E2',
                editable: false,
                rendering: "background",
                overlap: false,
                allDay: true
            }
        });

        this.setState({
            calendarEvents: calendarEvents
        });
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleSelect = (arg) => {

        const diff = new Date(arg.end - arg.start);

        this.setState({
            startDate: arg.start,
            endDate: arg.end,
            startDateString: arg.startStr,
            endDateString: arg.endStr,
            days: diff.getUTCDate() - 1
        });

        this.toggle();
    };

    handleAddNewRequest = () => {
        const data = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            leaveType: this.state.leaveType,
            notifyPm: this.state.notifyPm,
            comments: this.state.comments.trim(),
            token: this.props.token,
            interval: this.state.days
        };

        this.props.saveNewRequest(data);
        // setTimeout(()=>{this.toggle();window.location="/calendar"}, 200);
    };

    onChange(e, path){
        let state = this.state;
        state[path] = e.target.value;
        return this.setState(state);
    }

    render() {
        const data = this.props.userDetails.data,
              pms = this.props.userDetails.data.pms;

        return(
            <Row>
                <SideBar data={data}/>
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
                                <FullCalendar
                                    defaultView="dayGridMonth"
                                    selectable="true"
                                    header={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                                    }}
                                    plugins={[ interactionPlugin, dayGridPlugin ]}
                                    ref={ this.state.calendarComponentRef }
                                    weekends={true}
                                    select={ this.handleSelect }
                                    events={ this.state.calendarEvents }
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Modal isOpen={this.state.modal}
                       centered={true}
                       toggle={this.toggle}
                       className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Fly away {this.state.days} days</ModalHeader>
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
                                                        <input id="startDate" type="text" className="form-control" disabled={true} placeholder={`${this.state.startDateString}`} value={this.state.startDateString} />
                                                    </Col> :
                                                    <div>
                                                        <Col xs={6}>
                                                            <input id="startDate" type="text" className="form-control" disabled={true} placeholder={`${this.state.startDateString}`} value={this.state.startDateString} />
                                                        </Col>
                                                        <Col xs={6}>
                                                            <input id="endDate" type="text" className="form-control" disabled={true} placeholder={`${this.state.endDateString}`} value={this.state.endDateString} />
                                                        </Col>
                                                    </div>
                                                }
                                            </div>
                                            <Col xs={8}>
                                                <div className="form-group">
                                                    <label htmlFor="leaveType">Leave Type</label>
                                                    <select onChange={(e) => this.onChange(e, "leaveType")} id="leaveType" className="form-control">
                                                        <option value="CO">Concediu anual</option>
                                                        <option value="CM">Concediu medical</option>
                                                        <option value="SD">Sick day</option>
                                                        <option value="FE">Family emergency</option>
                                                        <option value="BD">Blood donation</option>
                                                        <option value="TOL">Timp liber compensat (time of in lieu)</option>
                                                        <option value="D">Delegatie</option>
                                                        <option value="B">Breavement (deces in familie )</option>
                                                        <option value="CC">Concediu casatorie</option>
                                                        <option value="CF">concediu fara plata</option>
                                                        <option value="CP">Concediu Paternal</option>
                                                        <option value="TD">Training day</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col xs={8}>
                                                <div className="form-group">
                                                    <label htmlFor="notifyPm">Notify PM</label>
                                                    <select onChange={(e) => this.onChange(e, "notifyPm")} id="notifyPm" className="form-control">
                                                        {pms ?
                                                            pms.map((item, key) =>
                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                            )
                                                            :
                                                            ""
                                                        }
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="form-group">
                                                    <label htmlFor="comments">Comments</label>
                                                    <input onChange={(e) => this.onChange(e, "comments")} id="comments" type="text" className="form-control" required="required" />
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
                            <button type="button" onClick={this.handleAddNewRequest} className="colleaguesAddNewBtn">Request leave</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </Row>
        );
    }

}

