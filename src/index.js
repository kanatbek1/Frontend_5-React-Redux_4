import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers';
import { logger } from 'redux-logger'; 
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
