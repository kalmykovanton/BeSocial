import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import appReducer from "./AppReducer";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReducer';
import usersReducer from './UsersReducer';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer, 
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;