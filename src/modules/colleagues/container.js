import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import colleaguesActions from '../../redux/colleagues/actions'
import dashboardActions from '../../redux/dashboard/actions'
import colleaguesSelectors from '../../redux/colleagues/selectors'
import dashboardSelectors from '../../redux/dashboard/selectors'

import Colleagues from '../../modules/colleagues'

const mapStateToProps = state => ({
    userDetails: dashboardSelectors.getUserInfo(state),
    colleagues: colleaguesSelectors.getAllUsers(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetails: dashboardActions.get,
    getAllColleagues: colleaguesActions.get
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Colleagues);
