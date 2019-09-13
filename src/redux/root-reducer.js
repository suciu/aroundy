import { combineReducers } from 'redux';

import auth from './login/reducer';
import dashboard from './dashboard/reducer';
import colleagues from './colleagues/reducer';
import requests from './requests/reducer';

export default combineReducers({
    auth,
    dashboard,
    colleagues,
    requests
});