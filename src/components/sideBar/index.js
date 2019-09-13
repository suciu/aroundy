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
    const user = props.data.user;
    const role = user ? user.role.alias : undefined;

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
                    Welcome, <b>{user ? user.name : ""}</b>!<br />Your holiday balance has
                </p>
                <p className="userDays">
                    {user ? user.balance:""} DAYS
                </p>
                <p className="logout" onClick={logout}>
                   Logout
                </p>
            </div>
            <div  className="sideBarMenu">
                <ul className="sideBarMenuItem">
                    <li className="sideBarMenuItemActive">
                        <Link to={'dashboard'}>Dashboard</Link>
                    </li>
                    <li className="sideBarMenuItemActive">
                        <Link to={'calendar'}>Calendar</Link>
                    </li>
                    <li className="sideBarMenuItemActive">
                        <Link to={'requests'}>Requests</Link>
                    </li>
                    { role === "hr" || role === "pm" ? (
                        <li className="sideBarMenuItemActive">
                            <Link to={'colleagues'}>Colleagues</Link>
                        </li>
                    ) : ("")
                    }
                    { role === "hr" || role === "pm" ? (
                        <li className="sideBarMenuItemActive">
                            <Link to={'reports'}>Reports</Link>
                        </li>
                    ) : ("")
                    }

                </ul>
            </div>
        </Col>
    );
};

export default SideBar;