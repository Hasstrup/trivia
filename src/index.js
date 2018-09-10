
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import store from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



/**
 * The Provider component will use the React advanced
 * context feature to make this store available to any component inside it,
 * including grandchildren.
 * https://egghead.io/lessons/react-redux-passing-the-store-down-implicitly-via-context
 *
 *
 * Provider exposes this store you passed through
 * BrowserRouter tells the app which parts you're wanting to allow routing in
 */
