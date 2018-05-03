/**
 * Application entry point
 */

// Load application styles
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import store from './store/index';
import setupAxiosInterceptors from './globals/interceptors';
import App from './components/App/index';

if (module.hot) {
  module.hot.accept();
}

setupAxiosInterceptors(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
