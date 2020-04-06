import {updateObjectInArray} from './../utils/ObjectHelpers';
import {userAPI} from './../api/api.js';

const FOLLOW = 'beSocial/users/FOLLOW';
const UNFOLLOW = 'beSocial/users/UNFOLLOW';
const SET_USERS = 'beSocial/users/SET_USERS';
const SET_CURRENT_PAGE = 'beSocial/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'beSocial/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FATCHING = 'beSocial/users/TOGGLE_IS_FATCHING';
const TOGGLE_IS_FOLLOWING = 'beSocial/users/TOGGLE_IS_FOLLOWING';

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
                users: updateObjectInArray(state.users, action.userId, "id",{followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: false})
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
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

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

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFatching(true));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFatching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, userId));
    const data = apiMethod(userId);
    if (!data.resultCode)
        dispatch(actionCreator(userId));
    dispatch(toggleIsFollowing(false, userId));
};

export const follow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess);
};

export const unfollow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollowSuccess);
};

export default usersReducer;