import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './App';
import allReducers from './reducers/allReducers';

const reduxStore=createStore(allReducers)
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
    </Provider>,
  document.getElementById('root')
);



