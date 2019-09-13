import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import dashboardActions from '../../redux/dashboard/actions'
import requestsActions from '../../redux/requests/actions'
import dashboardSelectors from '../../redux/dashboard/selectors'
import requestsSelectors from '../../redux/requests/selectors'
import Requests from '../../modules/requests'

const mapStateToProps = state => ({
    userDetails: dashboardSelectors.getUserInfo(state),
    userRequests: requestsSelectors.getAllRequests(state),
    userColleaguesRequests: requestsSelectors.getAllRequests(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetails: dashboardActions.get,
    getUserRequests: requestsActions.get,
    getColleaguesRequests: requestsActions.all
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
