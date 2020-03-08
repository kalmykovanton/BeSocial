import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './my.css';
import { addPost } from './redux/state';
import {addMessage} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from './redux/state';
import {updateNewMessageText} from './redux/state';


export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
};
