import React from "react"
import { Route, Redirect } from "react-router-dom"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { checkToken } from '../redux/login/actions';

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, token, ...rest } = this.props;
    return (
      <Route {...rest} render={props => {
        return token
          ? <Component {...this.props} />
          : <Redirect to="/login" />
      }} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    token: checkToken()
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);
