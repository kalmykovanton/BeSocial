import registerServiceWorker from './registerServiceWorker';
import store from './redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './my.css';
import {Provider} from 'react-redux';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
        renderEntireTree(state);
});

registerServiceWorker();
