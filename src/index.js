// Standard imports.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux-related.
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

// The store is created from the root reducers.
let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
