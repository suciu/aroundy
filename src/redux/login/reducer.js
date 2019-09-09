import { POST_LOGIN } from './types';

const initialState = {
    login: {}
};

export default function (state = initialState, action) {
    switch (action.type){
        case POST_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
}