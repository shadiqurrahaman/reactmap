import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux'
import {reducer} from './store/reducer'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import login from './store/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(login);
// store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
