import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import SideBar from '../../components/sideBar';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';


export default class CalendarComponent extends Component {
    componentDidMount()
    {
        this.props.getUserDetails(this.props.token);
    }

    calendarComponentRef = React.createRef();
    state = {
        calendarWeekends: true,
        calendarEvents: [ // initial event data
            { title: 'Event Now', start: new Date() }
        ]
    };

    handleDateClick = (arg) => {
        console.log(arg);
    };

    handleSelect = (arg) => {
        console.log(arg);
    };

    render() {
        const user = this.props.userDetails.data;

        return(
            <Row>
                <SideBar user={user}/>
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
                                    ref={ this.calendarComponentRef }
                                    weekends="true"
                                    dateClick={ this.handleDateClick }
                                    select={ this.handleSelect }
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }

}

