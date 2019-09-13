import requestsAC from './action-creators'
import requestsAPI from '../../api/requests'

const get = (token) => async (dispatch) => {
  try {
    dispatch(requestsAC.get.pending());

    const data = await requestsAPI.all(token);

    dispatch(requestsAC.get.success(data));

    return Promise.resolve();
  } catch (err) {
    dispatch(requestsAC.get.error(err));
  }
};

const all = (token) => async (dispatch) => {
    try {
        dispatch(requestsAC.get.pending());

        const data = await requestsAPI.allColleaguesReq(token);

        dispatch(requestsAC.get.success(data));

        return Promise.resolve();
    } catch (err) {
        dispatch(requestsAC.get.error(err));
    }
};

export default {
  get,
  all
}
