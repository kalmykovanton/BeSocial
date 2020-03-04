import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './my.css';
import state from './state/state';

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

registerServiceWorker();
