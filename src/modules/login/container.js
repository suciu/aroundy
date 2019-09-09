import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postLogin } from '../../redux/login/actions';

import Login from '../../modules/login'

Login.propTypes = {
    postLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    login: state.auth.login
});

export default connect(mapStateToProps, { postLogin })(Login);