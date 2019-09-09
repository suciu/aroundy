import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import UserImage from '../../assets/images/ellipse.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';

import "./index.css"

function logout(){
    localStorage.removeItem('Auth');
    setTimeout(()=>window.location="/login", 200);
}

const SideBar = (props) => {
    const role = props.user.role ? props.user.role.alias : undefined;

    return (
        <Col xs="3" className="sideBar">
            <div className="appLogoContainer">
                <img className="appLogo" src={Logo} />
            </div>
            <div className="userImageContainer">
                <img className="userImage" src={UserImage} />
            </div>
            <div className="userWelcomeDetails">
                <p className="userWelcome">
                    Welcome, <b>{props.user.name}</b>!<br />Your holiday balance has
                </p>
                <p className="userDays">
                    16,5 DAYS
                </p>
                <p className="logout" onClick={logout}>
                   Logout
                </p>
            </div>
            <div  className="sideBarMenu">
                <ul className="sideBarMenuItem">
                    <li className="sideBarMenuItemActive">
                        <Link to={'dashboard'} className="active">Dashboard</Link>
                    </li>
                    <li className="">
                        <Link to={'calendar'} className="active">Calendar</Link>
                    </li>
                    <li className="">
                        <Link to={'requests'} className="active">Requests</Link>
                    </li>
                    { role === "hr" || role === "pm" ? (
                        <li className="">
                            <Link to={'colleagues'} className="active">Colleagues</Link>
                        </li>
                    ) : ("")
                    }
                    { role === "hr" || role === "pm" ? (
                        <li className="">
                            <Link to={'reports'} className="active">Reports</Link>
                        </li>
                    ) : ("")
                    }

                </ul>
            </div>
        </Col>
    );
};

export default SideBar;