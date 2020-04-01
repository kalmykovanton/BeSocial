import {userAPI} from './../api/api.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FATCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING:
            return {...state,
                    isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)};
        default:
            return state;
    }
}

export const followSuccess = (userId) =>
    ({type: FOLLOW, userId: userId});

export const unfollowSuccess = (userId) =>
    ({type: UNFOLLOW, userId: userId});

export const setUsers = (users) =>
    ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalCount) =>
    ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const toggleIsFatching = (isFatching) =>
    ({type: TOGGLE_IS_FATCHING, isFatching});

export const toggleIsFollowing = (isFollowingInProgress, userId) =>
    ({type: TOGGLE_IS_FOLLOWING, isFollowingInProgress, userId});

export const requestUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFatching(true));

        userAPI.getUsers(currentPage, pageSize).then( data => {
            dispatch(toggleIsFatching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowing(true, userId));
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId));
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowing(true, userId));
        userAPI.unfollowUser(userId)
            .then( data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId));
            });
    }
}

export default usersReducer;