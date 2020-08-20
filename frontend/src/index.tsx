import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { isMobile } from "react-device-detect";

ReactDOM.render(
  <React.StrictMode>
    {
      isMobile ? 
      <App />
      :
      <div>This is only supported in mobile clients at the moment</div>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
