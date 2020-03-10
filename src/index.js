import registerServiceWorker from './registerServiceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './my.css';
import {
    addPost,
    addMessage,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from './redux/state';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderEntireTree(state);

subscribe(renderEntireTree);

registerServiceWorker();
