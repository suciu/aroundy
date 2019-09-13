import { apiStateCreator } from 'reddeck'

import types from './types'

const initialState = {
  all: {
    data: [],
    api: apiStateCreator()
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET: {
      return ({
        ...state,
        all: {
          ...state.all,
          api: apiStateCreator({ pending: true })
        }
      })
    }

    case types.GET_SUCCESS: {
      return ({
        ...state,
        all: {
          ...state.all,
          data: action.payload,
          api: apiStateCreator({ success: true })
        }
      })
    }

    case types.GET_ERROR: {
      return ({
        ...state,
        all: {
          ...state.all,
          api: apiStateCreator({ error: true })
        }
      })
    }

    default:
      return state
  }
}
