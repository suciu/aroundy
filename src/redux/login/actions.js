import request from "superagent";
import jwtDecode from "jwt-decode";

import { POST_LOGIN, POST_LOGIN_PENDING, POST_LOGIN_ERROR } from './types';

export const postLogin = (credentials) => {
    return async (dispatch) => {
        dispatch({
            type: POST_LOGIN_PENDING,
            payload: null
        });

        try {
            let promise = new Promise((resolve, reject) => {
                request
                    .post(`http://aroundy.demo/api/auth`)
                    .send(credentials)
                    .end((err, res) => {
                        if (!res.body.token) {
                            return reject(res.body.message);
                        }

                        return resolve(res.body.token);
                    });
            });

            let result = await promise;

            let decoded = jwtDecode(result);

            let obj = {};
            obj.token = result;
            obj.user = decoded;
            obj.message = "success";

            localStorage.setItem('Auth', JSON.stringify({
                'token': result,
                'user': decoded.iss
            }));

            return dispatch({
                type: POST_LOGIN,
                payload: obj
            });


        } catch (err) {
            let obj = {};
            obj.message = "Error";
            obj.token = null;
            obj.user = null;

            localStorage.removeItem('Auth');

            return dispatch({
                type: POST_LOGIN_ERROR,
                payload: obj
            });
        }
    }
};

export const checkToken = () => {
    let auth = JSON.parse(localStorage.getItem('Auth'));

    if (auth === "null" || auth === null || auth === undefined) return false;

    return auth.token;
};