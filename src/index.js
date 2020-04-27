import registerServiceWorker from './registerServiceWorker';
import store from './redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import App from './App';
import './my.css';
import {Provider} from 'react-redux';

ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root'));

registerServiceWorker();
