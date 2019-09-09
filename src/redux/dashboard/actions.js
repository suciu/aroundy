import dashboardAC from './action-creators'
import dashboardAPI from '../../api/dashboard'

const get = (token) => async (dispatch) => {
  try {
    dispatch(dashboardAC.get.pending());

    const data = await dashboardAPI.get(token);

    dispatch(dashboardAC.get.success(data));

    return Promise.resolve();
  } catch (err) {
    dispatch(dashboardAC.get.error(err));
  }
};

export default {
  get
}
