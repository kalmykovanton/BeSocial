import {combineReducers, createStore} from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReducer';
import usersReducer from './UsersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;