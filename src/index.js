import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux'
import rootreducer from './store/rootreducer';
import rootSaga from './store/rootsaga';
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import history from './history';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>
);
