import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './my.css';
import { addPost } from './redux/state';
import {addMessage} from './redux/state';
import {BrowserRouter} from "react-router-dom";


export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>,
        document.getElementById('root'));
};
