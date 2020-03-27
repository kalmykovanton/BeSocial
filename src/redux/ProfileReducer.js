import {profileAPI} from "./../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (!state.newPostText)
                return state;
            const date = new Date();
            const dateFormat = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}`;
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length,
                    message: state.newPostText,
                    likesCounter: 0,
                    date: dateFormat
                }],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        default:
            return state;
    }
};

export const addPost = () =>
    ({type: ADD_POST});

export const updateNewPostText = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, newText});

export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) =>
        ( {type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => dispatch(setUserProfile(response.data)));
        };

export const getUserStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => dispatch(setUserStatus(response)));
          };

export const updateUserStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if ( !response.data.resultCode )
                    dispatch(setUserStatus(status));
            });
         };


export default profileReducer;