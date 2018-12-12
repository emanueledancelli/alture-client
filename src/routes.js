import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, Navigation, DesktopHeader, DesktopFooter } from "components";
import posed, { PoseGroup } from "react-pose";
import "styles/index.scss";

import { Home } from "pages/Home";
import { Single } from "pages/Single";
import { Info } from "pages/Info";
import { Privacy } from "pages/Privacy";
import { Notifications } from "pages/Notifications";
import { Map } from "pages/Map";

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/mappa" component={Map} />
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
  enter: { beforeChildren: true }
});

export const App = () => {
  return (
    <Route
      render={({ location }) => (
        <>
          <DesktopHeader />

          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              {location.pathname === "/" ||
              location.pathname.startsWith("/Mappa") ? (
                <Header />
              ) : null}

              {Routes(location)}

              {location.pathname === "/" ||
              location.pathname.startsWith("/Mappa") ? (
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
