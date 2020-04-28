import {authAPI, profileAPI} from "./../api/api";

const ADD_POST = 'beSocial/profile/ADD-POST';
const SET_USER_PROFILE = 'beSocial/profile/SET-USER-PROFILE';
const SET_STATUS = 'beSocial/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            likesCounter: 25,
            date: "XX.XX.XXXX AA:AA"
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet.",
            likesCounter: 44,
            date: "YY.YY.YYYY BB:BB"
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Corporis dolores earum ex non perspiciatis quia, totam.",
            likesCounter: 60,
            date: "ZZ.ZZ.ZZZZ CC:CC"
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (!action.newPostText)
                return state;
            const date = new Date();
            const dateFormat = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}`;
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length,
                    message: action.newPostText,
                    likesCounter: 0,
                    date: dateFormat
                }]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};
        case SAVE_PHOTO_SUCCESS:
            return{...state, profile: {...state.profile, photos: action.photos}};

        default:
            return state;
    }
};

export const addPost = (newPostText) =>
    ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) =>
    ({type: SET_STATUS, status});

export const savePhotoSuccess = (photos) =>
    ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode) {
        dispatch(setUserStatus(status))
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (!response.data.resultCode) {
        dispatch(setUserStatus(response.data.photos))
    }
};

export default profileReducer;