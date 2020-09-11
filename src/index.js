import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import environment from './environments/environment.prod';

firebase.initializeApp(environment.firebase);
firebase.analytics();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();