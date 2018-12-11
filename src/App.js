import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Routes } from "routes";
import { Header, Navigation, DesktopHeader, DesktopFooter } from "components";

import "styles/index.scss";

export const App = () => {
    return (
        <Route
          render={({ location }) => (
            <div>

              <DesktopHeader />

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Header />
                : null }
              
                  {Routes(location)}

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Navigation />
                : null }

              <DesktopFooter />

            </div>
          )}
        />
    );
}

