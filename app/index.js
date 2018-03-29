/**
 * Application entry point
 */

// Load application styles
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App/index";
import 'bootstrap/dist/css/bootstrap.css'


if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);