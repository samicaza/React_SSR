import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'
import App from './App.js'
import configureStore from './store/configureStore';

const preloadedState = window.__PRELOADED_STATE__

const store = configureStore(window.__PRELOADED_STATE__);

ReactDOM.hydrate(
  <ReduxProvider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);
