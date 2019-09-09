import React, { Component } from "react"
import { Router, Route, Redirect, Switch } from "react-router-dom"

import AuthorizedRoute from "./AuthorizedRoute"

import Login from '../modules/login/container';
import Dashboard from '../modules/dashboard/container';
import Calendar from '../modules/calendar/container';
import Requests from '../modules/requests/container';
import Colleagues from '../modules/colleagues/container';
import Reports from '../modules/reports/container';

export default class Routes extends Component {
  render() {
    const props = this.props;

      return (
          <Router history={props.history}>
              <Switch>
                  <Route path="/login" component={Login} />
                  <AuthorizedRoute exact path="/dashboard" component={Dashboard} />
                  <AuthorizedRoute exact path="/calendar" component={Calendar} />
                  <AuthorizedRoute exact path="/requests" component={Requests} />
                  <AuthorizedRoute exact path="/colleagues" component={Colleagues} />
                  <AuthorizedRoute exact path="/reports" component={Reports} />
                  <Redirect to="/login" />
              </Switch>
          </Router>
      );
  }
}
