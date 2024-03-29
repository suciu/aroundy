import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import dashboardActions from '../../redux/dashboard/actions'
import dashboardSelectors from '../../redux/dashboard/selectors'
import Reports from '../../modules/reports'

const mapStateToProps = state => ({
    userDetails: dashboardSelectors.getUserInfo(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetails: dashboardActions.get
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
