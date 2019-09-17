import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import dashboardActions from '../../redux/dashboard/actions'
import calendarActions from '../../redux/calendar/actions'
import dashboardSelectors from '../../redux/dashboard/selectors'
import Calendar from '../../modules/calendar'

const mapStateToProps = state => ({
    userDetails: dashboardSelectors.getUserInfo(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetails: dashboardActions.get,
    saveNewRequest: calendarActions.save
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
