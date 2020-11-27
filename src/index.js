import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './history';
import reportWebVitals from './reportWebVitals';

import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
  <React.Fragment>
    <Router history={history}>
      <App />
    </Router>
  </React.Fragment>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
