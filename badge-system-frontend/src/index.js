import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import allReducers from './state-management/reducers/combinedReducer.js'


// STORE -> GLOBALIZED STATE
// const myStore = createStore(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


ReactDOM.render(
  <React.StrictMode>
    {/* // <Provider store={myStore}> */}
        <App />
    {/* // </Provider>, */}
   </React.StrictMode>,
  document.getElementById("root")
);
