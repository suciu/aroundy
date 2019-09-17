import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import dashboardActions from '../../redux/dashboard/actions'
import calendarActions from '../../redux/calendar/actions'
import dashboardSelectors from '../../redux/dashboard/selectors'
import requestsActions from '../../redux/requests/actions'
import requestsSelectors from '../../redux/requests/selectors'


import Calendar from '../../modules/calendar'

const mapStateToProps = state => ({
    userDetails: dashboardSelectors.getUserInfo(state),
    userRequests: requestsSelectors.getAllRequests(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetails: dashboardActions.get,
    saveNewRequest: calendarActions.save,
    getUserRequests: requestsActions.get,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
