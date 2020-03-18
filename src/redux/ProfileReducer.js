const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    profile: null
}

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
                posts: [...state.posts, { id: state.posts.length,
                                        message: state.newPostText,
                                        likesCounter: 0,
                                        date: dateFormat}],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        default:
            return state;
    }

    return state;
}

export const addPost = () =>
    ({ type: ADD_POST });

export const updateNewPostText = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText});

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile});

export default profileReducer;