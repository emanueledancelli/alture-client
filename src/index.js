import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchEvents } from "actions/eventsActions";
import store from "store";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

store.dispatch(fetchEvents());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
