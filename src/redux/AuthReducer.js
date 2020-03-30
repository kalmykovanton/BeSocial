import {authAPI} from './../api/api.js';

const SET_USER_DATA = 'SET_USER_DATA';

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

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then( response => {
                if (response.data.resultCode === 0)	{
                    const {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
    }
};

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then( response => {
                if (response.data.resultCode === 0)	{
                    dispatch(getAuthUserData());
                }
            });
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then( response => {
                if (response.data.resultCode === 0)	{
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
};

export default authReducer;