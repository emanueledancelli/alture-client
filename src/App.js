import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "routes";
import posed, { PoseGroup } from "react-pose";
import { Header, Navigation, DesktopHeader, DesktopFooter } from "components";
import "styles/index.scss";

const RoutesContainer = posed.div({
  enter: { beforeChildren: true }
});

export const App = () => {
  return (
    <Route
      render={({ location }) => (
        <div>
          <DesktopHeader />

          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              {location.pathname === "/" ||
              location.pathname.startsWith("/Mappa") ? (
                <Header />
              ) : null}

              {location.pathname === "/" ||
              location.pathname.startsWith("/Mappa") ? (
                <Navigation />
              ) : null}

              {Routes(location)}
            </RoutesContainer>
          </PoseGroup>

          <DesktopFooter />
        </div>
      )}
    />
  );
};
