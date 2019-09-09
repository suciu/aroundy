import { asyncActionCreator } from 'reddeck'
import types from './types'

const get = asyncActionCreator(
    types.GET,
    types.GET_SUCCESS,
    types.GET_ERROR
);

export default {
  get
}
