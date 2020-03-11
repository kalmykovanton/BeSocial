import {combineReducers, createStore} from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReduser';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

export default store;