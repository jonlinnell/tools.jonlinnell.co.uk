import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';

const { REACT_APP_GA_ID, REACT_APP_GA_DEBUG } = process.env;
ReactGA.initialize(REACT_APP_GA_ID, { debug: REACT_APP_GA_DEBUG })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
