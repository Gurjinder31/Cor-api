import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { StateProvider } from "./StateProvider";
import Reducer, { initialState } from "./reducer/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      //   initial look of data
      initialState={initialState}
      // reducer is how we manipulate data
      reducer={Reducer}
    >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);