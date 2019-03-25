import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation, DesktopHeader, DesktopFooter } from "components";
import posed, { PoseGroup } from "react-pose";
import Loadable from "react-loadable";
import LoadableLoader from "components/common/LoadableLoader";
import "styles/index.scss";
import { Single } from "pages/Single";
import { Info } from "pages/Info";

const Home = Loadable({
  loader: () => import("pages/Home/Home.page"),
  loading: LoadableLoader
});

const Notifications = Loadable({
  loader: () => import("pages/Notifications/Notifications.page"),
  loading: LoadableLoader
});

const Explore = Loadable({
  loader: () => import("pages/Explore/Explore.page"),
  loading: LoadableLoader
});

const Feedback = Loadable({
  loader: () => import("pages/Feedback/Feedback.page"),
  loading: LoadableLoader
});

const Privacy = Loadable({
  loader: () => import("pages/Privacy/Privacy.page"),
  loading: LoadableLoader
});

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/informazioni" component={Info} />
      <Route exact path="/privacypolicy" component={Privacy} />
      <Route exact path="/notifiche" component={Notifications} />
      <Route exact path="/esplorando-i-confini" component={Explore} />
      <Route exact path="/Feedback" component={Feedback} />
      <Route
        exact
        path="/eventi/:id/:title"
        render={routeProps => <Single {...routeProps} />}
      />
    </Switch>
  );
};

/**
 * needed to allow routes to be animated,
 * passing no args for enter/leave state
 * that applies to all the routes
 */

const RoutesContainer = posed.div({});

export const App = () => {
  return (
    <Route
      render={({ location }) => (
        <>
          <DesktopHeader />

          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              {Routes(location)}
            </RoutesContainer>
          </PoseGroup>

          {location.pathname === "/" ||
          location.pathname === "/informazioni" ? (
            <Navigation />
          ) : null}

          <DesktopFooter />
        </>
      )}
    />
  );
};
