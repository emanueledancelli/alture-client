import React from "react";
import ReactDOM from "react-dom";
import { App } from "routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchEvents } from "actions/eventsActions";
import { setNotificationStatus } from "actions/notActions";
import { initializeOneSignal } from "push";
import store from "store";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

store.dispatch(fetchEvents());
store.dispatch(setNotificationStatus());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();
//initializeOneSignal();
