import React from 'react';
import ReactDOM from 'react-dom';
import App from  "./app";
import "./index.css";
import {store} from "./features/car/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>

      </App>
      </Provider>
   

  </React.StrictMode>,
  document.getElementById('root')
);

