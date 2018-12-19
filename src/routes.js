import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation, DesktopHeader, DesktopFooter } from "components";
import posed, { PoseGroup } from "react-pose";
import "styles/index.scss";

import { Home } from "pages/Home";
import { Single } from "pages/Single";
import { Info } from "pages/Info";
import { Privacy } from "pages/Privacy";
import { Notifications } from "pages/Notifications";

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/informazioni" component={Info} />
      <Route exact path="/privacypolicy" component={Privacy} />
      <Route exact path="/notifiche" component={Notifications} />
      <Route
        exact
        path="/eventi/:id/:title"
        render={routeProps => <Single {...routeProps} />}
      />
    </Switch>
  );
};

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const App = () => {
  return (
    <Route
      render={({ location }) => (
        <>
          <DesktopHeader />

          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              {Routes(location)}

              {location.pathname === "/" ||
              location.pathname.startsWith("/informazioni") ? (
                <Navigation />
              ) : null}
            </RoutesContainer>
          </PoseGroup>

          <DesktopFooter />
        </>
      )}
    />
  );
};
