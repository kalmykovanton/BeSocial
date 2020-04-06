import {authAPI} from './../api/api.js';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'beSocial/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email, isAuth) =>
    ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});

export const getAuthUserData = () => async (dispatch) => {

    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (email, password, rememberMe = false) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        const message = response.data.messages.length > 0
            ? response.data.messages[0] : "Some error!";
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {

    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;