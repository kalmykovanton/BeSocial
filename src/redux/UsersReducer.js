const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: "Olechka",
            photoUrl: "https://lh3.googleusercontent.com/proxy/DJv7vq_jYWBBJ6ZOLYPi86N0qfZ_WcWr-DrBY1_iDia_-JmUTDgIAO0rXUAW7QyFCQ7SGdEd5F8o6Qu9Dn7EKjk",
            status: "I am a pretty girl",
            location: {
                city: "Kharkov",
                country: "Ukrane"
            }
        },
        {
            id: 2,
            followed: true,
            fullName: "Arthur",
            photoUrl: "https://lh3.googleusercontent.com/proxy/DJv7vq_jYWBBJ6ZOLYPi86N0qfZ_WcWr-DrBY1_iDia_-JmUTDgIAO0rXUAW7QyFCQ7SGdEd5F8o6Qu9Dn7EKjk",
            status: "I am a senior web developer",
            location: {
                city: "Kharkov",
                country: "Ukrane"
            }
        },
        {
            id: 3,
            followed: false,
            fullName: "Artyom",
            photoUrl: "https://lh3.googleusercontent.com/proxy/DJv7vq_jYWBBJ6ZOLYPi86N0qfZ_WcWr-DrBY1_iDia_-JmUTDgIAO0rXUAW7QyFCQ7SGdEd5F8o6Qu9Dn7EKjk",
            status: "I am a boss",
            location: {
                city: "Severodonetsk",
                country: "Ukrane"
            }
        },
        {
            id: 4,
            followed: true,
            fullName: "Ruslan",
            photoUrl: "https://lh3.googleusercontent.com/proxy/DJv7vq_jYWBBJ6ZOLYPi86N0qfZ_WcWr-DrBY1_iDia_-JmUTDgIAO0rXUAW7QyFCQ7SGdEd5F8o6Qu9Dn7EKjk",
            status: "I am a ABAP developer",
            location: {
                city: "Tver",
                country: "Russia"
            }
        },
        {
            id: 5,
            followed: true,
            fullName: "Dima",
            photoUrl: "https://lh3.googleusercontent.com/proxy/DJv7vq_jYWBBJ6ZOLYPi86N0qfZ_WcWr-DrBY1_iDia_-JmUTDgIAO0rXUAW7QyFCQ7SGdEd5F8o6Qu9Dn7EKjk",
            status: "I am a sales manager",
            location: {
                city: "Kharkov",
                country: "Ukrane"
            }
        }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users ]};
        default:
            return state;
    }
}

export const followAC = (userId) =>
    ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) =>
    ({ type: UNFOLLOW, userId: userId });

export const setUserAC = (users) =>
    ({ type: SET_USERS, users });

export default usersReducer;