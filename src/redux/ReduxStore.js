import {combineReducers, createStore} from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReducer';
import usersReducer from './UsersReducer';
import authReduser from './AuthReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReduser
});

let store = createStore(reducers);

window.store = store;

export default store;