import React from "react";
import ReactDOM from "react-dom";
import { App } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchEvents } from "./actions/eventsActions.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import store from "./store";
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

serviceWorkerRegistration.register();
