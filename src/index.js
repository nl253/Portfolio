// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './registerServiceWorker';
import app from './app';

ReactDOM.render(app, document.getElementById('root'));
unregister();
