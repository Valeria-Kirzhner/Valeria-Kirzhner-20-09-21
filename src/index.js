import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/popper";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import 'react-toastify/dist/ReactToastify.css';



import { Provider } from "react-redux";

import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
          <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
