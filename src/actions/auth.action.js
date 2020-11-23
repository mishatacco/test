import {login, logout, register} from '../services/auth.service'

import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE} from './types';

export const registerAction = (username, email, password, firstName, lastName) => (dispatch) => {

    return register(username, email, password, firstName, lastName)
        .then(
        () => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: 'Registration success',
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const loginAction = (username, password) => (dispatch) => {

    return login(username, password)
        .then(
            (result) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: result.data},
                });

                return Promise.resolve();
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
};

export const logoutAction = () => (dispatch) => {
    logout();

    dispatch({
        type: LOGOUT,
    });
};
