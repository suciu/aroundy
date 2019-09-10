import colleaguesAC from './action-creators'
import colleaguesAPI from '../../api/colleagues'

const get = (token) => async (dispatch) => {
  try {
    dispatch(colleaguesAC.get.pending());

    const data = await colleaguesAPI.all(token);

    dispatch(colleaguesAC.get.success(data));

    return Promise.resolve();
  } catch (err) {
    dispatch(colleaguesAC.get.error(err));
  }
};

const save = (newColleague) => async (dispatch) => {
    try {
        dispatch(colleaguesAC.get.pending());

        const data = await colleaguesAPI.save(newColleague);

        dispatch(colleaguesAC.get.success(data));

        return Promise.resolve();
    } catch (err) {
        dispatch(colleaguesAC.get.error(err));
    }
};

export default {
  get,
  save
}
