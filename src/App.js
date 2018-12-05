import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import { Routes } from "routes";

import "styles/index.scss";

import { Header, Navigation, DesktopHeader } from "components";


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          render={({ location }) => (
            <div className="App">

              <DesktopHeader />

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Header />
                : null }

              {Routes(location)}

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Navigation />
                : null }

            </div>
          )}
        />
      </Provider>
    );
  }
}

