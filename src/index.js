import registerServiceWorker from './registerServiceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './my.css';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

registerServiceWorker();
