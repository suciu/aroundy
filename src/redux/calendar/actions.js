import requestsAC from './action-creators'
import requestsAPI from '../../api/requests'

const save = (newRequest) => async (dispatch) => {
    try {
        dispatch(requestsAC.get.pending());

        const data = await requestsAPI.save(newRequest);

        dispatch(requestsAC.get.success(data));

        return Promise.resolve();
    } catch (err) {
        dispatch(requestsAC.get.error(err));
    }
};

const approveRequest = (requestData) => async (dispatch) => {
    try {
        dispatch(requestsAC.get.pending());

        const data = await requestsAPI.approveRequest(requestData);

        dispatch(requestsAC.get.success(data));

        return Promise.resolve();
    } catch (err) {
        dispatch(requestsAC.get.error(err));
    }
};

export default {
  save,
  approveRequest
}
