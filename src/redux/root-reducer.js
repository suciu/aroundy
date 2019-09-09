import { combineReducers } from 'redux';

import auth from './login/reducer';
import dashboard from './dashboard/reducer';
import colleagues from './colleagues/reducer';

export default combineReducers({
    auth,
    dashboard,
    colleagues
});