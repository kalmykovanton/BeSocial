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
    isFatching: false,
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
            return {...state, isFatching: action.isFatching};
        case TOGGLE_IS_FOLLOWING:
            return {...state,
                    isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)};
        default:
            return state;
    }
}

export const follow = (userId) =>
    ({type: FOLLOW, userId: userId});

export const unfollow = (userId) =>
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

export default usersReducer;