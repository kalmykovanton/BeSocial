import {combineReducers, createStore, applyMiddleware} from "redux";
import appReducer from "./AppReducer";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReducer';
import usersReducer from './UsersReducer';
import authReduser from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;